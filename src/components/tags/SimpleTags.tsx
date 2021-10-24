import React, { ReactElement } from "react";
import { ThemeType } from "../../../types/globalTypes";

interface Props {
  tag: string;
  theme?: ThemeType;
  className?: string;
}

function SimpleTags({ tag, className = "" }: Props): ReactElement {
  return (
    <button
      className={`p-1 m-1 rounded-sm bg-primary-accent-dark text-primary-text-dark ${className}`}
    >
      {"#" + tag}
    </button>
  );
}

export default SimpleTags;
