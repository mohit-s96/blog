import React, { ReactElement, useRef, useState } from "react";
import { BlogSlug } from "../../../types/blogtypes";
import { ThemeType } from "../../../types/globalTypes";
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

interface Props {
  stats: Pick<
    BlogSlug,
    "commentCount" | "likes" | "viewCount" | "uri" | "title"
  >;
  theme: ThemeType;
}

function StatsIcon({ stats, theme }: Props): ReactElement {
  const [show, setShow] = useState(false);
  const focusRef = useRef<HTMLButtonElement>(null);
  const showMoreOptions = () => {
    setShow(!show);
  };

  const copyLink = () => {
    window.navigator.clipboard.writeText(
      "https://mohits.dev/blog/" + stats.uri
    );
  };

  return (
    <>
      <button
        className="flex flex- p-2 my-2 flex-col justify-center items-center cursor-pointer"
        aria-label="more-options"
        onClick={showMoreOptions}
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
          <DropDown theme={theme} visible={show} fref={focusRef}>
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
      <button className="flex flex- p-2 my-2 flex-col justify-center items-center cursor-pointer">
        <HeartIcon color="gray" />
        <span className="font-bold p-2 text-gray-500 text-sm">
          {stats.likes} likes
        </span>
      </button>
      <button className="flex flex- p-2 my-2 flex-col justify-center items-center cursor-pointer">
        <CommentIcon color="gray" />
        <span className="font-bold p-2 text-gray-500 text-sm">
          {stats.commentCount} comments
        </span>
      </button>
      <button className="flex flex- p-2 my-2 flex-col justify-center items-center cursor-pointer">
        <EyeIcon color="gray" />
        <span className="font-bold p-2 text-gray-500 text-sm">
          {stats.viewCount} views
        </span>
      </button>
    </>
  );
}

export default StatsIcon;
