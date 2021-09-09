import React, { ReactElement } from "react";
import Tags from "../tags/Tags";

interface Props {
  tags: Array<string>;
  theme: "dark" | "light";
  type: "horiz" | "vert";
}

function PostTags({ tags, type, theme }: Props): ReactElement {
  return (
    <div
      className={`p-2 ${
        type === "horiz" ? "w-6/12" : "w-10/12"
      } flex flex-wrap`}
    >
      {tags.map((tag) => (
        <Tags
          theme={theme}
          accent={true}
          triangular={true}
          children={tag}
          variant="sm"
          key={tag}
          classes="m-2 mx-5"
        />
      ))}
    </div>
  );
}

export default PostTags;
