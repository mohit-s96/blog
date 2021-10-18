import React, { ReactElement } from "react";
import { LayoutType, ThemeType } from "../../../types/globalTypes";

interface Props {
  text: string;
  theme: ThemeType;
  type: LayoutType;
}

function PostTitle({ text, theme, type }: Props): ReactElement {
  return (
    <div
      className={`p-2 ${
        type === "horiz"
          ? "w-8/12 text-4xl leading-"
          : "w-full text-2xl font-bold"
      } text-primary-accent-dark`}
    >
      {text}
    </div>
  );
}

export default PostTitle;
