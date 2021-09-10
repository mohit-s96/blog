import { formatDistance } from "date-fns";
import React, { ReactElement } from "react";
import PostPreview, { CardProps } from "../card/PostPreview";

export interface Props {
  theme: CardProps["theme"];
  data: Array<CardProps["blog"]>;
}

function Cards({ data, theme }: Props): ReactElement {
  return (
    <div className="flex flex-wrap justify-between">
      {data.map((blog, i) => (
        <PostPreview
          theme={theme}
          blog={{
            ...blog,
            altText: "Main blog image",
            layoutType: i === 0 ? "horiz" : "vert",
            content: {
              ...blog.content,
              time: (formatDistance(blog.content.time, Date.now(), {
                addSuffix: true,
              }) as unknown) as number,
            },
          }}
        />
      ))}
    </div>
  );
}

export default Cards;
