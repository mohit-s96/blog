import { format } from "date-fns";
import React, { ReactElement } from "react";
import { BlogSlug } from "../../../types/blogtypes";
import { ThemeType } from "../../../types/globalTypes";
import Tags from "../tags/Tags";

interface Props {
  data: Partial<BlogSlug>;
}

function SearchResults({ data }: Props): ReactElement {
  return (
    <div
      className={`p-2 m-2 flex flex-col w-[98%] mx-auto rounded-2xl dark:bg-primary-bg-dark bg-primary-bg-light`}
    >
      <div className="flex justify-between">
        <p className="p-2 text-xl text-primary-accent-dark text-sm-res padding-0-res">
          {data.title}
        </p>
        <p className="p-2 text-xl text-primary-accent-dark text-sm-res padding-0-res">
          {format(data.createdAt as number, "do MMM, yy")}
        </p>
      </div>
      <div className="flex">
        {data.tags?.slice(0, 2).map((tag) => (
          <Tags
            key={tag}
            children={`#${tag}`}
            accent
            variant="sm"
            className="mr-2 font-bold p-4 padding-0-res"
          />
        ))}
      </div>
    </div>
  );
}

export default SearchResults;
