import React, { ReactElement } from "react";
import { BlogSlug, RelatedBlogsType } from "../../../types/blogtypes";
import { ThemeType } from "../../../types/globalTypes";
import ReadingList from "./readingList";

interface Props {
  list: Partial<BlogSlug>[];
  theme: ThemeType;
}

function RelatedBlogs({ list, theme }: Props): ReactElement {
  return (
    <aside
      className={`2xl:col-span-3 hidden xl:col-span-3 relative xl:flex justify-center items-start`}
    >
      <div className="fixed flex flex-col justify-center items-center 2xl:translate-x-[15%] mt-3">
        <ReadingList theme={theme} list={list} />
      </div>
    </aside>
  );
}

export default RelatedBlogs;
