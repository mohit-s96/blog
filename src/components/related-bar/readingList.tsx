import React, { ReactElement } from "react";
import { RelatedBlogsType } from "../../../types/blogtypes";
import { ThemeType } from "../../../types/globalTypes";

interface Props {
  theme: ThemeType;
  list: RelatedBlogsType;
}

function ReadingList({ theme, list }: Props): ReactElement {
  return (
    <div className="flex flex-col">
      <p className="mx-2 text-primary-accent-light font-bold">related blogs:</p>
      {list.map((blog) => (
        <div className="flex flex-col shadow-lg p-2 my-2" key={blog._id as any}>
          <p
            className={`${
              theme === "dark" ? "text-primary-bg-light" : "text-gray-800"
            } hover:underline p-2 text-lg cursor-pointer`}
          >
            {blog.title}
          </p>
          <div className="flex mt-2">
            {blog.tags.map((tag) => (
              <span
                key={tag}
                className="mx-2 text-sm bg-primary-accent-light text-white cursor-pointer"
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
