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
    <aside className="col-span-3 relative flex justify-center items-start border-r-4 border-gray-300">
      <div className="fixed flex flex-col justify-center items-center mt-3">
        <StatsIcon stats={stats} theme={theme} />
      </div>
    </aside>
  );
}

export default StatsBar;
