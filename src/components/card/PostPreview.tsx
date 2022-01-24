import React, { ReactElement } from "react";
import { BlogListType } from "../../../types/blogtypes";
import { LayoutType, ThemeType } from "../../../types/globalTypes";
import PostPreviewContent from "./PostPreviewContent";
import PostPreviewImage from "./PostPreviewImage";

export interface CardProps {
  theme: ThemeType;
  layoutType?: LayoutType;
  blog: BlogListType;
}
function PostPreview({
  theme,
  layoutType = "vert",
  blog: { images, title, tags, createdAt, excerpt, uri },
}: CardProps): ReactElement {
  return (
    <>
      <div
        className={`flex relative my-8 mx-3 shadow-2xl cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-3 hover:shadow-2xl w-full-sm responsive-card flex-col mx-res`}
        style={{
          borderRadius: "1.5rem",
        }}
      >
        {" "}
        <>
          <PostPreviewImage type={layoutType} images={images[0]} />
          <PostPreviewContent
            time={createdAt}
            title={title}
            excerpt={excerpt}
            tags={tags}
            slug={uri}
            type={layoutType}
            theme={theme}
          />
        </>
      </div>
    </>
  );
}

export default PostPreview;
