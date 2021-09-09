import React, { ReactElement } from "react";

interface Props {
  text: string;
  theme: "dark" | "light";
  type: "horiz" | "vert";
}

function PostTitle({ text, theme, type }: Props): ReactElement {
  return (
    <div
      className={`p-2 ${
        type === "horiz"
          ? "w-8/12 text-4xl leading-"
          : "w-full text-2xl font-bold"
      } ${
        theme === "dark" ? "text-primary-text-dark" : "text-primary-text-light"
      }`}
    >
      {text}
    </div>
  );
}

export default PostTitle;
