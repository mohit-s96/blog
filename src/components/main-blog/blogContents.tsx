import React, {
  Dispatch,
  ReactElement,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { BlogSlug } from "../../../types/blogtypes";
import { ThemeType } from "../../../types/globalTypes";
import ResImage from "../card/resImages";
import {
  EyeIcon,
  FacebookIcon,
  HeartIcon,
  LinkIcon,
  RedditIcon,
  TwitterIcon,
} from "../svg/collection.svg";
import format from "date-fns/format";
import SimpleTags from "../tags/SimpleTags";
import { PRIMARY_BG_DARK } from "../../../constants";
import { fromUnixTime } from "date-fns";
import { useTheme } from "next-themes";
import { debounce, getUri } from "../../../util/misc";
import { useRouter } from "next/router";

interface Props {
  theme: ThemeType;
  data: BlogSlug;
  setCommentCount: Dispatch<SetStateAction<number>>;
}

function BlogContents({ data, setCommentCount }: Props): ReactElement | null {
  const { theme } = useTheme();
  const [loaded, setLoaded] = useState(false);
  const [liked, setLiked] = useState(false);

  const [stats, setStats] = useState({ views: 0, likes: 0, commentCount: 0 });
  const router = useRouter();

  useEffect(() => {
    let promises: Array<Promise<any>> = [];
    const queryParams = `?slug=/blog/${data.uri}`;
    promises.push(
      fetch(`${getUri()}/api/stats${queryParams}`, {
        credentials: "include",
        method: "POST",
      })
    );
    promises.push(
      fetch(`${getUri()}/api/likes?uri=/${data.uri}`, {
        credentials: "include",
        method: "GET",
      })
    );
    Promise.all(promises)
      .then((res) => {
        promises = [];
        promises.push(res[0].json());
        promises.push(res[1].json());
        return Promise.all(promises);
      })
      .then((res) => {
        setStats({
          commentCount: res[0].count,
          likes: res[1].likes,
          views: res[0].pageViews,
        });
        setCommentCount(res[0].count);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [router]);

  useEffect(() => {
    const localData = JSON.parse(
      localStorage.getItem("likes") || "[]"
    ) as Array<string>;
    if (localData.indexOf(data.uri) > -1) {
      setLiked(true);
    } else {
      setLiked(false);
    }
  }, [router]);

  useEffect(() => {
    setLoaded(true);
    // this has to be the order of dynamic imports otherwise line-numbers or copy button or both won't work
    import("prismjs").then(() => {
      //@ts-ignore
      import("prismjs/plugins/toolbar/prism-toolbar").then(() => {
        import(
          //@ts-ignore
          "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard"
          //@ts-ignore
        ).then(() => Prism.highlightAll());
      });
    });
  }, []);

  const handleLikeClick = () => {
    if (!liked) {
      setLiked(true);
      let items = localStorage.getItem("likes") as string | null;
      let likedBlogs = items ? (JSON.parse(items) as Array<string>) : [];
      likedBlogs.push(data.uri);
      localStorage.setItem("likes", JSON.stringify(likedBlogs));
      setStats((prev) => ({
        ...prev,
        likes: prev.likes + 1,
      }));

      fetch(`${getUri()}/api/likes`, {
        credentials: "include",
        method: "POST",
        body: JSON.stringify({ uri: `/${data.uri}` }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          if (!res.ok) {
            throw "error increasing likes";
          }
        })
        .catch((err) => {
          console.log(err);
          setStats((prev) => ({
            ...prev,
            likes: prev.likes - 1,
          }));
        });
    }
  };

  const copyLink = () => {
    window.navigator.clipboard.writeText("https://mohits.dev/blog/" + data.uri);
  };
  return (
    <div className="w-full flex items-center flex-col line-numbers p-2 md:p-6 lg:p-0">
      <div className={`w-full dark:bg-primary-bg-dark bg-white`}>
        <div className="flex p-2">
          <p
            className={`text-3xl lg:text-4xl font-bold pt-4 px-0 text-primary-text-light dark:text-primary-text-dark w-full`}
          >
            {data.title}
          </p>
        </div>
        <div className="flex p-2 w-full flex-wrap">
          {data.tags.map((tag) => (
            <SimpleTags
              key={tag}
              tag={tag}
              className="lg:p-1 lg:font-bold p-[2px] my-0 text-sm tracking-widest bg-transparent border-2 border-primary-accent-light text-primary-text-light hover:bg-primary-accent-light hover:text-primary-text-dark dark:text-primary-text-dark cursor-default"
            />
          ))}
        </div>
        <div className="flex w-full">
          <div className="flex w-full p-2 relative">
            <div className="flex w-full justify-center flex-col">
              <p className="pt-[2px]">
                <time
                  className={`font-bold text-sm text-primary-text-light dark:text-light-gray ml-0`}
                  title={format(data.createdAt, "do MMM, yy, HH:mm aaa")}
                  dateTime={fromUnixTime(data.createdAt).toUTCString()}
                >
                  {format(data.createdAt, "do MMM, yy")}
                </time>
                <span className="font-bold text-sm text-primary-text-light dark:text-light-gray ml-2">
                  by {data.author}
                </span>
              </p>
              {data.lastEdited ? (
                <p className="pt-[2px]">
                  <span className="italic text-sm text-primary-text-light dark:text-light-gray">
                    [edited{" "}
                  </span>
                  <time
                    className={`italic text-sm text-primary-text-light dark:text-light-gray ml-0`}
                    title={format(data.lastEdited, "do MMM, yy, HH:mm aaa")}
                    dateTime={fromUnixTime(data.createdAt).toUTCString()}
                  >
                    {format(data.createdAt, "do MMM, yy")}
                  </time>
                  <span className="italic text-sm text-primary-text-light dark:text-light-gray">
                    ]
                  </span>
                </p>
              ) : null}
            </div>
            <div className="flex w-6/12 text-sm font-bold justify-start mt-1 h-32 absolute flex-col right-0 top-0 items-center">
              {loaded ? (
                <>
                  <div className="flex items-center justify-between w-7/12 md:w-4/12">
                    <button
                      className={`w-10 h-10 pt-1 md:pt-0 rounded-full dark:bg-primary-bg-dark flex justify-center items-center scale-75 ${
                        liked ? "heart-liked" : ""
                      }`}
                      onClick={debounce(handleLikeClick, 200, false)}
                      title="like blog"
                      aria-describedby={liked ? "like the blog" : "like added"}
                    >
                      <HeartIcon
                        color={
                          liked
                            ? "#df2563"
                            : theme === "dark"
                            ? "#E5E4E2"
                            : PRIMARY_BG_DARK
                        }
                        width={28}
                      />
                    </button>
                    <span
                      className="font-bold text-lg text-primary-text-light dark:text-light-gray w-[calc(100%-4rem)] text-left"
                      title="like count"
                    >
                      {stats.likes}
                    </span>
                  </div>
                  <div className="flex items-center justify-between w-7/12 md:w-4/12">
                    <span className="w-10 h-10 rounded-full dark:bg-primary-bg-dark flex justify-center items-center scale-75">
                      <EyeIcon
                        color={theme === "dark" ? "#fff" : PRIMARY_BG_DARK}
                        width={32}
                      />
                    </span>
                    <span
                      className="font-bold text-lg text-primary-text-light dark:text-light-gray w-[calc(100%-4rem)] text-left"
                      title="view count"
                    >
                      {stats.views}
                    </span>
                  </div>
                </>
              ) : null}
            </div>
          </div>
        </div>
        <div className="w-full ml-2">
          <span
            className={`w-full font-bold text-sm text-primary-text-light dark:text-light-gray`}
          >
            {data.readingTime} read
          </span>
        </div>
        <div className="flex w-full p-2 pl-0 h-[56px]">
          {loaded ? (
            <>
              <a
                target="_blank"
                rel="noopener"
                aria-label="share on twitter"
                href={`https://twitter.com/intent/tweet?text=check out this blog on ${data.title}. https://mohits.dev/blog/${data.uri}`}
                className="w-10 h-10 rounded-full dark:bg-primary-bg-dark p-2 mr-[-10px] md:mr-0 scale-75 md:scale-100 dark:bg-transparent dark:hover:bg-primary-accent-light transition-all duration-200"
              >
                <TwitterIcon
                  color={theme === "dark" ? "#fff" : PRIMARY_BG_DARK}
                />
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=https://mohits.dev/blog/${data.uri}`}
                target="_blank"
                aria-label="share on facebook"
                rel="noopener"
                className="w-10 h-10 rounded-full bg-primary-bg-light dark:bg-primary-bg-dark p-2 md:mr-2 mr-0 scale-75 md:scale-100 dark:bg-transparent dark:hover:bg-primary-accent-light transition-all duration-200"
              >
                <FacebookIcon
                  color={theme === "dark" ? "#fff" : PRIMARY_BG_DARK}
                />
              </a>
              <a
                href={`http://ww.reddit.com/submit?url=https://mohits.dev/blog/${data.uri}}&title=${data.title}`}
                target="_blank"
                rel="noopener"
                aria-label="share on reddit"
                className="w-10 h-10 rounded-full bg-primary-bg-light dark:bg-primary-bg-dark p-2 md:mr-2 mr-0 scale-75 md:scale-100 dark:bg-transparent dark:hover:bg-primary-accent-light transition-all duration-200"
              >
                <RedditIcon
                  color={theme === "dark" ? "#fff" : PRIMARY_BG_DARK}
                />
              </a>
              <button
                onClick={copyLink}
                aria-label="copy blog link"
                name="copy blog link to clipboard"
                className="w-10 h-10 rounded-full dark:bg-primary-bg-dark flex justify-center items-center scale-75 md:scale-100 dark:bg-transparent dark:hover:bg-primary-accent-light transition-all duration-200"
              >
                <LinkIcon color={theme === "dark" ? "#fff" : PRIMARY_BG_DARK} />
              </button>
            </>
          ) : null}
        </div>
      </div>
      <div className="w-full overflow-hidden">
        <ResImage
          alt={data.images.find((img) => img.isHero)!.alt}
          uris={data.images.find((img) => img.isHero)!.permUri}
          className="w-full"
          lowres={data.lowres}
          forceload
        />
      </div>
      <div className="w-full">
        <div
          className="md-render-parent"
          dangerouslySetInnerHTML={{ __html: data.blogData }}
        ></div>
      </div>
    </div>
  );
}

export default BlogContents;
