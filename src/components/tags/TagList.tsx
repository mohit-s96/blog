import React, { ReactElement } from "react";
import Tags from "./Tags";

interface Props {
  tags: Array<string>;
  theme: "dark" | "light";
  variant: "md" | "sm";
}

function TagList({ tags, theme, variant }: Props): ReactElement {
  return (
    <div className="flex justify-center">
      {tags.map((tag) => (
        <Tags
          children={tag}
          theme={theme}
          key={tag}
          variant={variant}
          classes="mx-2"
        />
      ))}
    </div>
  );
}

export default TagList;
