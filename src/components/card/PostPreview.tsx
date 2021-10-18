import React, { ReactElement, useEffect, useState } from "react";
import { BlogListType } from "../../../types/blogtypes";
import { DeviceTypes, LayoutType, ThemeType } from "../../../types/globalTypes";
import PostPreviewContent from "./PostPreviewContent";
import PostPreviewImage from "./PostPreviewImage";
import Link from "next/link";
import { resolveLayouts } from "../../../util/misc";

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
  const [deviceType, setDeviceType] = useState<DeviceTypes>("regular");

  useEffect(() => {
    // const targetWidth = window.innerWidth;
    // if (targetWidth < 1024) {
    //   setDeviceType("mobile");
    // } else if (targetWidth >= 1024 && targetWidth <= 1200) {
    //   setDeviceType("ipad");
    // } else {
    //   setDeviceType("regular");
    // }
  }, []);

  return (
    <>
      <div
        className={resolveLayouts(deviceType, layoutType)}
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
            type={
              deviceType === "regular"
                ? layoutType
                : deviceType === "mobile"
                ? "vert"
                : "horiz"
            }
            theme={theme}
          />
        </>
      </div>
    </>
  );
}

export default PostPreview;
