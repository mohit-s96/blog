import React, { ReactElement, useCallback, useEffect, useState } from "react";
import Tags from "../tags/Tags";

interface Props {
  tags: Array<string>;
  theme: "dark" | "light";
  type: "horiz" | "vert";
}

function PostTags({ tags, type, theme }: Props): ReactElement {
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
