import React, { ReactElement, useEffect, useState } from "react";
import PostPreviewContent from "./PostPreviewContent";
import PostPreviewImage from "./PostPreviewImage";

export interface CardProps {
  theme: "dark" | "light";
  blog: {
    layoutType?: "horiz" | "vert";
    imgUri: string;
    altText?: string;
    content: {
      title: string;
      excerpt: string;
      tags: Array<string>;
      time: number;
    };
  };
}
export type DeviceTypes = "mobile" | "ipad" | "regular";
function PostPreview({
  blog: { layoutType = "horiz", imgUri, content, altText = "" },
  theme,
}: CardProps): ReactElement {
  const [deviceType, setDeviceType] = useState<DeviceTypes>("ipad");
  useEffect(() => {
    const targetWidth = window.innerWidth;
    if (targetWidth < 1024) {
      setDeviceType("mobile");
    } else if (targetWidth >= 1024 && targetWidth <= 1200) {
      setDeviceType("ipad");
    } else {
      setDeviceType("regular");
    }
  }, []);
  function resolveLayouts() {
    let str = "flex relative mb-6";
    if (deviceType === "mobile" || deviceType === "ipad") {
      str += " w-full mt-8";
      str += deviceType === "mobile" ? " flex-col" : "";
    } else if (layoutType === "horiz") {
      str += " w-full";
    } else {
      str += " w-card-lg-vert flex-col";
    }

    return str;
  }
  return (
    <>
      <div className={resolveLayouts()}>
        {deviceType === "regular" ? (
          <>
            <PostPreviewImage type={layoutType} uri={imgUri} alt={altText} />
            <PostPreviewContent
              content={content}
              type={layoutType}
              theme={theme}
            />
          </>
        ) : deviceType === "mobile" ? (
          <>
            <PostPreviewImage type="vert" uri={imgUri} alt={altText} />
            <PostPreviewContent content={content} type="vert" theme={theme} />
          </>
        ) : (
          <>
            <PostPreviewImage type="horiz" uri={imgUri} alt={altText} />
            <PostPreviewContent content={content} type="horiz" theme={theme} />
          </>
        )}
      </div>
    </>
  );
}

export default PostPreview;
