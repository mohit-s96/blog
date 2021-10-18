import { format } from "date-fns";
import React, { ReactElement, useEffect, useState } from "react";
import { DeviceTypes } from "../../../types/globalTypes";
import PostPreview, { CardProps } from "../card/PostPreview";

export interface CardArrayProps {
  theme: CardProps["theme"];
  data: Array<CardProps["blog"]>;
}

function Cards({ data, theme }: CardArrayProps): ReactElement {
  const [deviceType, setDeviceType] = useState<DeviceTypes>("regular");
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
  return (
    <div className={`flex flex-col`}>
      <div className="m-2 p-2 text-primary-accent-dark text-2xl">
        latest blogs
      </div>
      <div
        className={`flex flex-wrap ${
          deviceType === "mobile" ? "flex-col" : ""
        }`}
      >
        {data.map((blog) => (
          <PostPreview
            key={blog.createdAt}
            theme={theme}
            layoutType="vert"
            blog={{
              ...blog,
              createdAt: (format(
                blog.createdAt,
                "do MMM, yy"
              ) as unknown) as number,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Cards;
