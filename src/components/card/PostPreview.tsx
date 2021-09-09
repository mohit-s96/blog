import React, { ReactElement } from "react";
import PostPreviewContent from "./PostPreviewContent";
import PostPreviewImage from "./PostPreviewImage";

export interface Props {
  theme: "dark" | "light";
  layoutType: "horiz" | "vert";
  imgUri: string;
  altText: string;
  content: {
    title: string;
    excerpt: string;
    tags: Array<string>;
    time: number;
  };
}

function PostPreview({
  layoutType,
  imgUri,
  content,
  altText,
  theme,
}: Props): ReactElement {
  return (
    <div
      className={`${
        layoutType === "horiz" ? "w-full" : "w-card-lg-vert flex-col"
      } flex relative`}
    >
      <PostPreviewImage type={layoutType} uri={imgUri} alt={altText} />
      <PostPreviewContent content={content} type={layoutType} theme={theme} />
    </div>
  );
}

export default PostPreview;
