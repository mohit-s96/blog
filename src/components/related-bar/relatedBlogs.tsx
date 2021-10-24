import React, { ReactElement } from "react";
import { RelatedBlogsType } from "../../../types/blogtypes";
import { ThemeType } from "../../../types/globalTypes";
import ReadingList from "./readingList";

interface Props {
  list: RelatedBlogsType;
  theme: ThemeType;
}

function RelatedBlogs({ list, theme }: Props): ReactElement {
  return (
    <aside className="col-span-3 relative flex justify-center items-start border-l-4 border-gray-300">
      <div className="fixed flex flex-col justify-center items-center translate-x-[15%] mt-3">
        <ReadingList theme={theme} list={list} />
      </div>
    </aside>
  );
}

export default RelatedBlogs;
