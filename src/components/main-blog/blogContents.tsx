import React, { ReactElement, useLayoutEffect, useRef } from "react";
import { BlogSlug } from "../../../types/blogtypes";
import uri from "../../../public/favicon/icon-192x192.png";
import { ThemeType } from "../../../types/globalTypes";
import ResImage from "../card/resImages";
import Avatar from "../avatars/Avatar";
import NavItem from "../nav/NavItem";
import {
  FacebookIcon,
  LinkIcon,
  RedditIcon,
  TwitterIcon,
} from "../svg/collection.svg";
import format from "date-fns/format";
import SimpleTags from "../tags/SimpleTags";
import { PRIMARY_BG_DARK } from "../../../constants";
import { fromUnixTime } from "date-fns";

interface Props {
  theme: ThemeType;
  data: BlogSlug;
}

function BlogContents({ data, theme }: Props): ReactElement {
  const divRef = useRef<HTMLDivElement>(null);
  const moveUpRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    if (window.innerWidth > 768) {
      const height = divRef.current?.getBoundingClientRect().height;
      if (height) {
        moveUpRef.current!.style.transform = `translateY(-${height / 1.5}px)`;
      }
    }
  }, []);

  const copyLink = () => {
    window.navigator.clipboard.writeText("https://mohits.dev/blog/" + data.uri);
  };

  return (
    <div className="w-full flex items-center flex-col">
      <div className="w-full">
        <ResImage
          priority
          alt={data.images[0].alt}
          uris={data.images[0].permUri}
          className="w-full"
        />
      </div>

      <div
        ref={divRef}
        className={`xl:translate-y-[-70%] w-full dark:bg-primary-bg-dark bg-white`}
      >
        <div className="flex p-2">
          <p
            className={`text-3xl lg:text-4xl font-bold pt-4 px-0 text-primary-text-light dark:text-primary-text-dark text-center w-full`}
          >
            {data.title}
          </p>
        </div>
        <div className="flex p-2 justify-center w-full">
          {data.tags.map((tag) => (
            <SimpleTags
              key={tag}
              tag={tag}
              className="lg:p-1 lg:font-bold p-[2px] my-0 text-sm tracking-widest bg-transparent border-2 border-primary-accent-light text-primary-text-light hover:bg-primary-accent-light hover:text-primary-text-dark dark:text-primary-text-dark cursor-default"
            />
          ))}
        </div>
        <div className={`flex w-full justify-center`}>
          <div className="items-center flex w-full p-2">
            <div className="flex items-center w-full justify-center">
              <NavItem
                size="sm"
                theme={theme}
                renderButton={false}
                wrapperClassname="p-0"
                children={
                  <>
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
                  </>
                }
              />
            </div>
          </div>
        </div>
        <div className="w-full ml-2 text-center">
          <span
            className={`w-full font-bold text-sm text-primary-text-light dark:text-light-gray`}
          >
            {data.readingTime} read
          </span>
        </div>
        <div className="items-center flex w-full p-2 justify-center">
          <a
            target="_blank"
            rel="noopener"
            aria-label="share on twitter"
            href={`https://twitter.com/intent/tweet?text=check out this blog on ${data.title}. https://mohits.dev/blog/${data.uri}`}
            className="w-10 h-10 rounded-full bg-primary-bg-light dark:bg-primary-bg-dark p-2 md:mr-2 mr-0 scale-75 md:scale-100 dark:bg-transparent dark:hover:bg-primary-accent-light transition-all duration-200"
          >
            <TwitterIcon color={theme === "dark" ? "#fff" : PRIMARY_BG_DARK} />
          </a>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=https://mohits.dev/blog/${data.uri}`}
            target="_blank"
            aria-label="share on facebook"
            rel="noopener"
            className="w-10 h-10 rounded-full bg-primary-bg-light dark:bg-primary-bg-dark p-2 md:mr-2 mr-0 scale-75 md:scale-100 dark:bg-transparent dark:hover:bg-primary-accent-light transition-all duration-200"
          >
            <FacebookIcon color={theme === "dark" ? "#fff" : PRIMARY_BG_DARK} />
          </a>
          <a
            href={`http://ww.reddit.com/submit?url=https://mohits.dev/blog/${data.uri}}&title=${data.title}`}
            target="_blank"
            rel="noopener"
            aria-label="share on reddit"
            className="w-10 h-10 rounded-full bg-primary-bg-light dark:bg-primary-bg-dark p-2 md:mr-2 mr-0 scale-75 md:scale-100 dark:bg-transparent dark:hover:bg-primary-accent-light transition-all duration-200"
          >
            <RedditIcon color={theme === "dark" ? "#fff" : PRIMARY_BG_DARK} />
          </a>
          <button
            onClick={copyLink}
            aria-label="copy blog link"
            name="copy blog link to clipboard"
            className="w-10 h-10 rounded-full bg-primary-bg-light dark:bg-primary-bg-dark p-2 md:mr-2 mr-0 scale-75 md:scale-100 dark:bg-transparent dark:hover:bg-primary-accent-light transition-all duration-200"
          >
            <LinkIcon color={theme === "dark" ? "#fff" : PRIMARY_BG_DARK} />
          </button>
        </div>
      </div>
      <div ref={moveUpRef}>
        <div
          className="md-render-parent"
          dangerouslySetInnerHTML={{ __html: data.blogData }}
        ></div>
      </div>
    </div>
  );
}

export default BlogContents;
