import { format } from "date-fns";
import React, { ReactElement } from "react";
import PostPreview, { CardProps } from "../card/PostPreview";
import HorizCard from "./horiz-card";

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
        {data
          .sort((a, b) => a.createdAt - b.createdAt)
          .reverse()
          .map((blog) => (
            <HorizCard
              key={blog.createdAt}
              theme={theme}
              layoutType="horiz"
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
