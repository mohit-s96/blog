import React, { ReactElement } from "react";
import { BlogSlug } from "../../../types/blogtypes";
import uri from "../../../public/favicon/icon-192x192.png";
import { ThemeType } from "../../../types/globalTypes";
import ResImage from "../card/resImages";
import Avatar from "../avatars/Avatar";
import NavItem from "../nav/NavItem";
import {
  Clock,
  FacebookIcon,
  LinkIcon,
  RedditIcon,
  TwitterIcon,
} from "../svg/collection.svg";
import format from "date-fns/format";

interface Props {
  theme: ThemeType;
  data: BlogSlug;
}

function BlogContents({ data, theme }: Props): ReactElement {
  const copyLink = () => {
    window.navigator.clipboard.writeText("https://mohits.dev/blog/" + data.uri);
  };

  return (
    <div className="w-full flex items-center flex-col">
      <div className="w-full">
        <ResImage
          alt={data.images[0].alt}
          uris={data.images[0].permUri}
          className="w-full h-[30rem]"
        />
      </div>
      <div
        className={`translate-y-[-100%] w-full ${
          theme === "dark"
            ? "bg-[rgba(0,0,0,0.5)]"
            : "bg-[rgba(255,255,255,0.5)]"
        }`}
      >
        <div className={`flex w-full justify-center`}>
          <div className="items-center flex w-full p-2">
            <div className="flex items-center w-full justify-start">
              <Avatar
                alt="author avatar"
                imageUri={uri.src as any}
                size="sm"
                className="mx-2"
              />
              <NavItem
                size="sm"
                theme={theme}
                className={`mx-2 ${
                  theme === "dark" ? "text-gray-500" : "text-gray-800"
                } font-bold text-sm`}
                children={
                  (format(data.createdAt, "do MMM, yy") as unknown) as number
                }
              />
            </div>
            <div className="w-1/4 text-right">
              <span
                className={`${
                  theme === "dark" ? "text-gray-500" : "text-gray-800"
                } w-full font-bold text-sm`}
              >
                {data.readingTime} read
              </span>
            </div>
          </div>
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
      <div
        className="flex flex-column p-2"
        dangerouslySetInnerHTML={{ __html: data.blogData }}
      ></div>
    </div>
  );
}

export default BlogContents;
