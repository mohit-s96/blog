import React, { ReactElement } from "react";
import { LayoutType, ThemeType } from "../../../types/globalTypes";

interface Props {
  text: string;
  theme: ThemeType;
  type: LayoutType;
}

function PostExcerpt({ text, theme, type }: Props): ReactElement {
  return (
    <div
      className={`px-2 2xl:leading-6 leading-5 w-full md:w-8/12 text-gray-600 dark:text-gray-300 2xl:text-sm text-xs 2xl:text-[1em]`}
    >
      {
        text.slice(0, 100).concat("...")
        // type === "horiz"
        //   ? text
        //   : text.length > 100
        //   ? text.slice(0, 100).concat("...")
        //   : text
      }
    </div>
  );
}

export default PostExcerpt;
