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
    <div className="col-span-3 h-[92vh] relative">
      <div className="absolute top-1/4 left-2/4 -translate-x-2/4 -translate-y-2/4 flex flex-col justify-center items-center">
        <StatsIcon stats={stats} theme={theme} />
      </div>
    </div>
  );
}

export default StatsBar;
