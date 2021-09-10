import React, { ReactElement, useCallback, useEffect, useState } from "react";
import SimpleTags from "../tags/SimpleTags";
import Tags from "../tags/Tags";
import { DeviceTypes } from "./PostPreview";

interface Props {
  tags: Array<string>;
  theme: "dark" | "light";
  type: "horiz" | "vert";
  device?: DeviceTypes;
}

function PostTags({ tags, type, theme, device }: Props): ReactElement {
  const [loaded, setLoaded] = useState(false);
  const filterIfSmallScreen = useCallback(() => {
    if (typeof window === "undefined") return tags;
    if (window.innerWidth > 1500) return tags;
    else {
      return tags.filter((_, i) => i < 4);
    }
  }, [loaded]);
  useEffect(() => {
    setLoaded(true);
  }, []);
  return (
    <div
      className={`p-2 ${
        type === "horiz" ? "w-6/12" : "w-11/12"
      } flex flex-wrap`}
    >
      {filterIfSmallScreen().map((tag) => (
        <SimpleTags tag={tag} theme={theme} />
      ))}
    </div>
  );
}

export default PostTags;
