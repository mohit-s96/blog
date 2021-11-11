import Link from "next/link";
import React, { ReactElement } from "react";
import { LayoutType, ThemeType } from "../../../types/globalTypes";

interface Props {
  text: string;
  theme: ThemeType;
  type: LayoutType;
  slug?: string;
}

function PostTitle({ text, type, slug }: Props): ReactElement {
  return (
    <Link href={`/blog/${slug}`}>
      <div
        className={`p-2 ${
          type === "horiz"
            ? "w-8/12 text-4xl leading-"
            : "w-full text-2xl font-bold"
        } text-purple-700 hover:underline transition-all duration-300`}
      >
        {text}
      </div>
    </Link>
  );
}

export default PostTitle;
