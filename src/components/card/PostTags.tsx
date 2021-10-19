import React, { ReactElement } from "react";
import { DeviceTypes, LayoutType, ThemeType } from "../../../types/globalTypes";
import SimpleTags from "../tags/SimpleTags";

interface Props {
  tags: Array<string>;
  theme: ThemeType;
  type: LayoutType;
}

function PostTags({ tags, type, theme }: Props): ReactElement {
  return (
    <div
      className={`p-2 ${
        type === "horiz" ? "w-6/12" : "w-11/12"
      } flex flex-wrap`}
    >
      {tags.slice(0, 3).map((tag) => (
        <SimpleTags tag={tag} theme={theme} key={tag} />
      ))}
    </div>
  );
}

export default PostTags;
