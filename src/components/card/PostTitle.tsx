import Link from "next/link";
import React, { ReactElement } from "react";
import { PRIMARY_ACCENT_LIGHT } from "../../../constants";
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
      <a
        style={{
          color: PRIMARY_ACCENT_LIGHT,
        }}
        className={`px-2 ${
          type === "horiz" ? "text-lg font-bold" : "text-2xl font-bold"
        } hover:underline transition-all duration-300 w-full`}
      >
        {text}
      </a>
    </Link>
  );
}

export default PostTitle;
