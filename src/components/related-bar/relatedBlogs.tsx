import { format } from "date-fns";
import React, { ReactElement } from "react";
import {
  BlogListType,
  BlogSlug,
  RelatedBlogsType,
} from "../../../types/blogtypes";
import { ThemeType } from "../../../types/globalTypes";
import HorizCard from "../main-blog-cards/horiz-card";
import ReadingList from "./readingList";

interface Props {
  list: Partial<BlogSlug>[];
  theme: ThemeType;
}

function RelatedBlogs({ list, theme }: Props): ReactElement {
  let newlist = list.map((x) => ({
    ...x,
    createdAt: (format(x.createdAt!, "do MMM, yy") as unknown) as number,
  }));
  return (
    <aside
      className={`relative flex flex-col items-start 2xl:w-8/12 xl:w-9/12 md:w-10/12  w-full mx-auto md:translate-y-[-50%] lg:translate-y-[-25%]`}
    >
      <div className="2xl:w-8/12 xl:w-9/12 md:w-10/12  w-full mx-auto border-t-2 border-primary-accent-light">
        <h2 className="text-2xl font-bold p-4 text-primary-text-light dark:text-primary-text-dark">
          related blogs
        </h2>
        <div className="mx-auto flex flex-col justify-center items-center ">
          {newlist.map((x) => (
            <HorizCard
              theme={theme}
              blog={x as BlogListType}
              key={x.createdAt}
            />
          ))}
        </div>
      </div>
    </aside>
  );
}

export default RelatedBlogs;
