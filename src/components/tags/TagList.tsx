import React, { ReactElement } from "react";
import { ThemeType } from "../../../types/globalTypes";
import Tags from "./Tags";

interface Props {
  tags: Array<string>;
  theme: ThemeType;
  variant: "md" | "sm";
}

function TagList({ tags, theme, variant }: Props): ReactElement {
  return (
    <div className="flex justify-center items-center">
      {tags.map((tag) => (
        <Tags
          children={tag}
          theme={theme}
          key={tag}
          variant={variant}
          className="mr-2 font-bold"
        />
      ))}
    </div>
  );
}

export default TagList;
