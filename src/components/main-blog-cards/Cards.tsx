import { format } from "date-fns";
import React, { ReactElement } from "react";
import PostPreview, { CardProps } from "../card/PostPreview";

export interface CardArrayProps {
  theme: CardProps["theme"];
  data: Array<CardProps["blog"]>;
}

function Cards({ data, theme }: CardArrayProps): ReactElement {
  return (
    <div className={`flex flex-col`}>
      <div className="m-2 p-2 text-primary-accent-dark text-2xl">
        latest blogs
      </div>
      <div className={`flex flex-wrap flex-col-res`}>
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
