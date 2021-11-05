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
    <aside
      className={`2xl:col-span-3 hidden xl:col-span-3 relative xl:flex justify-center items-start`}
    >
      <div className="fixed flex flex-col justify-center items-center mt-3">
        <StatsIcon stats={stats} theme={theme} />
      </div>
    </aside>
  );
}

export default StatsBar;
