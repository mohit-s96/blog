import React, { ReactElement } from "react";
import NavItem from "../nav/NavItem";
import { Clock } from "../svg/collection.svg";
import PostExcerpt from "./PostExcerpt";
import PostTags from "./PostTags";
import PostTitle from "./PostTitle";

interface Props {
  theme: "dark" | "light";
  type: "horiz" | "vert";
  content: {
    title: string;
    excerpt: string;
    tags: Array<string>;
    time: number;
  };
}

function PostPreviewContent({
  content: { excerpt, time, title, tags },
  type,
  theme,
}: Props): ReactElement {
  return (
    <div
      className={`${
        type === "horiz" ? "w-card-lg-horiz" : "w-full min-h-[50%]"
      } ${theme === "dark" ? "bg-primary-dark" : "bg-primary-light"} ${
        type === "horiz"
          ? "rounded-br-3xl rounded-tr-3xl"
          : "rounded-br-3xl rounded-bl-3xl"
      }`}
    >
      <div className={`p-2 flex flex-col h-full justify-evenly`}>
        <PostTitle text={title} theme={theme} type={type} />
        <PostExcerpt text={excerpt} theme={theme} type={type} />
        <PostTags tags={tags} theme={theme} type={type} />
        <div className="inline-block absolute bottom-2 right-2">
          <NavItem size="xsm" theme={theme} children={time} Icon={Clock} />
        </div>
      </div>
    </div>
  );
}

export default PostPreviewContent;
