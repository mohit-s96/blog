import React, { ReactElement, useEffect, useState } from "react";
import { DeviceTypes, LayoutType, ThemeType } from "../../../types/globalTypes";
import PostPreviewContent from "./PostPreviewContent";
import PostPreviewImage from "./PostPreviewImage";

export interface CardProps {
  theme: ThemeType;
  blog: {
    layoutType?: LayoutType;
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
    let str =
      "flex relative mb-4 mx-3 shadow-2xl cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-3 hover:shadow-2xl";
    if (deviceType === "mobile" || deviceType === "ipad") {
      str += " w-full mt-8";
      str += deviceType === "mobile" ? " flex-col" : "";
    } else if (layoutType === "horiz") {
      str += " w-full";
    } else {
      str += " responsive-card flex-col";
    }

    return str;
  }
  return (
    <>
      <div
        className={resolveLayouts()}
        style={{
          borderRadius: "1.5rem",
        }}
      >
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
