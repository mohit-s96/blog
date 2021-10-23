import React, { ReactElement } from "react";
import { BlogSlug } from "../../../types/blogtypes";
import { ThemeType } from "../../../types/globalTypes";
import StatsIcon from "./statsIcon";

interface Props {
  stats: Pick<
    BlogSlug,
    "commentCount" | "likes" | "viewCount" | "uri" | "title"
  >;
  theme: ThemeType;
}

function StatsBar({ stats, theme }: Props): ReactElement {
  return (
    <div className="col-span-3 min-h-[93vh] relative flex justify-center items-center border-r-4 border-gray-300">
      <div className="absolute flex flex-col justify-center items-center">
        <StatsIcon stats={stats} theme={theme} />
      </div>
    </div>
  );
}

export default StatsBar;
