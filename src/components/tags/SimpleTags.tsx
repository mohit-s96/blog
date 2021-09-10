import React, { ReactElement } from "react";

interface Props {
  tag: string;
  theme?: "dark" | "light";
}

function SimpleTags({ tag, theme }: Props): ReactElement {
  return (
    <button
      className={`p-1 m-1 rounded-sm ${
        theme === "dark"
          ? "bg-primary-accent-dark text-primary-text-dark"
          : "bg-yellow-400"
      }`}
    >
      {"#" + tag}
    </button>
  );
}

export default SimpleTags;
