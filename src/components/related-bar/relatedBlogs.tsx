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
    <div className="col-span-3 min-h-[93vh] relative overflow-hidden flex justify-center items-center border-l-4 border-gray-300">
      <div className="absolute flex flex-col w-10/12 justify-center items-center">
        <ReadingList theme={theme} list={list} />
      </div>
    </div>
  );
}

export default RelatedBlogs;
