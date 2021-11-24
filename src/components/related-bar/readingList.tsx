import Link from "next/link";
import React, { ReactElement } from "react";
import { BlogSlug, RelatedBlogsType } from "../../../types/blogtypes";
import { ThemeType } from "../../../types/globalTypes";

interface Props {
  theme: ThemeType;
  list: Partial<BlogSlug>[];
}

function ReadingList({ theme, list }: Props): ReactElement {
  return (
    <div className="flex flex-col w-10/12 min-w-[300px]">
      <p className="p-1 2xl:p-2 bg-primary-accent-light font-bold rounded-md text-white text-sm 2xl:text-lg">
        related blogs:
      </p>
      {list.map((blog) => (
        <div
          className="flex flex-col shadow-lg p-1 2xl:p-2 my-2 hover:scale-110 transition-all duration-300"
          key={blog._id as any}
        >
          <p
            className={`hover:underline p-2 w-full text-sm 2xl:text-lg cursor-pointer font-bold dark:text-primary-bg-light text-gray-800`}
          >
            <Link href={`/blog/${blog.uri}`}>{blog.title}</Link>
          </p>
          <div className="flex mt-2 overflow-hidden">
            {(blog as BlogSlug).tags.map((tag) => (
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
