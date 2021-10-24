import React, { ReactElement } from "react";
import { RelatedBlogsType } from "../../../types/blogtypes";
import { ThemeType } from "../../../types/globalTypes";

interface Props {
  theme: ThemeType;
  list: RelatedBlogsType;
}

function ReadingList({ theme, list }: Props): ReactElement {
  return (
    <div className="flex flex-col w-10/12">
      <p className="p-1 2xl:p-2 bg-primary-accent-light font-bold rounded-md text-white text-sm 2xl:text-lg">
        related blogs:
      </p>
      {list.map((blog) => (
        <div
          className="flex flex-col shadow-lg p-1 2xl:p-2 my-2 hover:scale-110 transition-all duration-300"
          key={blog._id as any}
        >
          <p
            className={`${
              theme === "dark" ? "text-primary-bg-light" : "text-gray-800"
            } hover:underline p-2 text-sm 2xl:text-lg cursor-pointer font-bold`}
          >
            {blog.title}
          </p>
          <div className="flex mt-2">
            {blog.tags.map((tag) => (
              <span
                key={tag}
                className="mx-1 text-sm bg-gray-600 text-white cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ReadingList;
