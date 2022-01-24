import React, { ReactElement } from "react";
import { DeviceTypes, LayoutType, ThemeType } from "../../../types/globalTypes";
import SimpleTags from "../tags/SimpleTags";

interface Props {
  tags: Array<string>;
  theme: ThemeType;
  type: LayoutType;
  className?: string;
}

function PostTags({ tags, type, theme, className = "" }: Props): ReactElement {
  return (
    <div
      className={`px-2 ${
        type === "horiz" ? "w-6/12" : "w-11/12"
      } flex flex-wrap ${className}`}
    >
      {tags.slice(0, 3).map((tag) => (
        <SimpleTags className="text-sm" tag={tag} theme={theme} key={tag} />
      ))}
    </div>
  );
}

export default PostTags;
