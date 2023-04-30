import React, { ReactElement, useRef, useState, useEffect } from "react";
import { BlogSlug } from "../../../types/blogtypes";
import { ThemeType } from "../../../types/globalTypes";
import { debounce, getUri } from "../../../util/misc";
import DropDown from "../dropdown/dropdown";
import {
  CommentIcon,
  EllipsesIcon,
  EyeIcon,
  FacebookIcon,
  HeartIcon,
  LinkIcon,
  RedditIcon,
  ReportIcon,
  TwitterIcon,
} from "../svg/collection.svg";
import { useRouter } from "next/router";

interface Props {
  stats: Pick<BlogSlug, "uri" | "title">;
  views: number;
  likes: number;
  commentCount: number;
  theme: ThemeType;
  setStats: React.Dispatch<
    React.SetStateAction<{
      views: number;
      likes: number;
      commentCount: number;
    }>
  >;
}

function StatsIcon({
  stats,
  theme,
  views,
  likes,
  commentCount,
  setStats,
}: Props): ReactElement {
  const [show, setShow] = useState(false);
  const [liked, setLiked] = useState(false);
  const focusRef = useRef<HTMLButtonElement>(null);
  const likeRef = useRef<HTMLSpanElement>(null);
  const showMoreOptions = () => {
    setShow(!show);
  };
  const router = useRouter();

  const copyLink = () => {
    window.navigator.clipboard.writeText(
      "https://mohits.dev/blog/" + stats.uri
    );
  };

  useEffect(() => {
    const data = JSON.parse(
      localStorage.getItem("likes") || "[]"
    ) as Array<string>;
    if (data.indexOf(stats.uri) > -1) {
      setLiked(true);
      likeRef.current?.firstElementChild?.classList.add("blog-liked");
    } else {
      likeRef.current?.firstElementChild?.classList.remove("blog-liked");
    }
  }, [router]);

  const handleLikeClick = () => {
    if (!liked) {
      setLiked(true);
      likeRef.current?.firstElementChild?.classList.add("blog-liked");
      let items = localStorage.getItem("likes") as string | null;
      let likedBlogs = items ? (JSON.parse(items) as Array<string>) : [];

      likedBlogs.push(stats.uri);

      localStorage.setItem("likes", JSON.stringify(likedBlogs));
    }

    setStats((prev) => ({
      ...prev,
      likes: prev.likes + 1,
    }));

    fetch(`${getUri()}/api/likes`, {
      credentials: "include",
      method: "POST",
      body: JSON.stringify({ uri: `/${stats.uri}` }),
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

    setTimeout(() => {
      likeRef.current?.classList.add("like-click-anim");
      setTimeout(() => {
        likeRef.current?.classList.remove("like-click-anim");
      }, 400);
    }, 10);
  };

  return (
    <>
      <button
        className="flex flex- p-2 my-2 flex-col justify-center items-center cursor-pointer"
        aria-label="open sharing links dropdown"
        onClick={showMoreOptions}
        name="sharing links dropdown"
      >
        <EllipsesIcon color="gray" />
      </button>
      {
        <div
          className="w-full"
          onBlur={(e) => {
            // fix for blur on child focus
            if (!e.currentTarget.contains(e.relatedTarget as Node)) {
              setShow(false);
            }
          }}
        >
          <DropDown
            theme={theme}
            visible={show}
            fref={focusRef}
            className="w-52"
          >
            <>
              <div className="flex justify-between p-2 items-center w-full hover:bg-gray-300">
                <button
                  className="p-2 text-gray-600 text-sm font-bold"
                  onClick={copyLink}
                >
                  Copy link
                </button>
                <LinkIcon color="gray" />
              </div>
              <div className="flex justify-between p-2 items-center w-full hover:bg-gray-300">
                <a
                  target="_blank"
                  href={`https://twitter.com/intent/tweet?text=check out this blog on ${stats.title}. https://mohits.dev/blog/${stats.uri}`}
                  className="p-2 text-gray-600 text-sm font-bold"
                  rel="noopener"
                >
                  Share on twitter
                </a>
                <TwitterIcon color="gray" />
              </div>
              <div className="flex justify-between p-2 items-center w-full hover:bg-gray-300">
                <a
                  target="_blank"
                  href={`https://www.facebook.com/sharer/sharer.php?u=https://mohits.dev/blog/${stats.uri}`}
                  className="p-2 text-gray-600 text-sm font-bold"
                  rel="noopener"
                >
                  Share on fb
                </a>
                <FacebookIcon color="gray" />
              </div>
              <div className="flex justify-between p-2 items-center w-full hover:bg-gray-300">
                <a
                  href={`http://www.reddit.com/submit?url=https://mohits.dev/blog/${stats.uri}}&title=${stats.title}`}
                  target="_blank"
                  rel="noopener"
                  className="p-2 text-gray-600 text-sm font-bold"
                >
                  Share on reddit
                </a>
                <RedditIcon color="gray" />
              </div>
              <div className="flex justify-between p-2 items-center w-full hover:bg-gray-300">
                <a
                  className="p-2 text-gray-600 text-sm font-bold"
                  href="https://github.com/msx47/blog"
                  target="_blank"
                  rel="noopener"
                >
                  Report an issue
                </a>
                <ReportIcon color="gray" />
              </div>
            </>
          </DropDown>
        </div>
      }
      <button className="flex p-2 my-2 flex-col justify-center items-center cursor-pointer">
        <span onClick={debounce(handleLikeClick, 500, false)} ref={likeRef}>
          <HeartIcon color="gray" />
        </span>
        <span className="font-bold p-2 text-gray-500 text-sm">
          {likes} likes
        </span>
      </button>
      <a
        href="#comments"
        className="flex flex- p-2 my-2 flex-col justify-center items-center cursor-pointer"
      >
        <CommentIcon color="gray" />
        <span className="font-bold p-2 text-gray-500 text-sm">
          {commentCount} comments
        </span>
      </a>
      <button className="flex flex- p-2 my-2 flex-col justify-center items-center cursor-pointer">
        <EyeIcon color="gray" />
        <span className="font-bold p-2 text-gray-500 text-sm">
          {views} views
        </span>
      </button>
    </>
  );
}

export default StatsIcon;
