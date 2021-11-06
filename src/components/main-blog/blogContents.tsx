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
        moveUpRef.current!.style.transform = `translateY(-${height}px)`;
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
          alt={data.images[0].alt}
          uris={data.images[0].permUri}
          className="w-full hero-img-res"
        />
      </div>
      <div
        ref={divRef}
        className={`xl:translate-y-[-100%] w-full dark:bg-[rgba(0,0,0,0.5)] bg-[rgba(255,255,255,0.5)]`}
      >
        <div className={`flex w-full justify-center`}>
          <div className="items-center flex w-full p-2">
            <div className="flex items-center w-full justify-start">
              {/* <Avatar
                alt="author avatar"
                imageUri={uri.src as any}
                size="sm"
                className="mx-2"
              /> */}
              <NavItem
                size="sm"
                theme={theme}
                wrapperClassname="p-0"
                className={`mx-2 font-bold text-sm dark:text-white text-gray-800`}
                children={
                  ((format(data.createdAt, "do MMM, yy") +
                    " by " +
                    data.author) as unknown) as number
                }
              />
            </div>
          </div>
        </div>
        <div className="w-full ml-2">
          <span
            className={`w-full font-bold text-sm dark:text-white text-gray-800`}
          >
            {data.readingTime} read
          </span>
        </div>
        <div className="items-center flex w-full p-2">
          <a
            target="_blank"
            rel="noopener"
            href={`https://twitter.com/intent/tweet?text=check out this blog on ${data.title}. https://mohits.dev/blog/${data.uri}`}
            className="w-10 h-10 rounded-full bg-[#1D9BF0] p-2 mr-2"
          >
            <TwitterIcon color="#fff" />
          </a>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=https://mohits.dev/blog/${data.uri}`}
            target="_blank"
            rel="noopener"
            className="w-10 h-10 rounded-full bg-blue-600 p-2 mr-2"
          >
            <FacebookIcon color="#fff" />
          </a>
          <a
            href={`http://ww.reddit.com/submit?url=https://mohits.dev/blog/${data.uri}}&title=${data.title}`}
            target="_blank"
            rel="noopener"
            className="w-10 h-10 rounded-full bg-[#FF4500] p-2 mr-2"
          >
            <RedditIcon color="#fff" />
          </a>
          <button
            onClick={copyLink}
            aria-label="copy blog link"
            className="w-10 h-10 rounded-full bg-purple-600 p-2 mr-2"
          >
            <LinkIcon color="#fff" />
          </button>
        </div>
      </div>
      <div ref={moveUpRef}>
        <div className="flex p-2">
          <p
            className={`text-4xl font-bold pt-4 px-0 text-primary-accent-light`}
          >
            {data.title}
          </p>
        </div>
        <div className="flex p-2">
          {data.tags.map((tag) => (
            <SimpleTags
              key={tag}
              tag={tag}
              className="p-[2px] my-0 text-sm tracking-widest"
            />
          ))}
        </div>
        <div
          className="p-10 md-render-parent"
          dangerouslySetInnerHTML={{ __html: data.blogData }}
        ></div>
      </div>
    </div>
  );
}

export default BlogContents;
