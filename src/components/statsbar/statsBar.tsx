import React, { ReactElement, useEffect, useState } from "react";
import { BlogSlug } from "../../../types/blogtypes";
import { ThemeType } from "../../../types/globalTypes";
import { getUri } from "../../../util/misc";
import StatsIcon from "./statsIcon";

interface Props {
  stats: Pick<
    BlogSlug,
    "commentCount" | "likes" | "viewCount" | "uri" | "title"
  >;
  theme: ThemeType;
}

function StatsBar({ stats, theme }: Props): ReactElement {
  const [state, setState] = useState({ views: 0, likes: 0, commentCount: 0 });

  useEffect(() => {
    let promises: Array<Promise<any>> = [];
    const queryParams = `?slug=/blog/${stats.uri}`;
    promises.push(
      fetch(`${getUri()}/api/analytics${queryParams}`, {
        credentials: "include",
        method: "POST",
      })
    );
    promises.push(
      fetch(`${getUri()}/api/likes?uri=/${stats.uri}`, {
        credentials: "include",
        method: "GET",
      })
    );
    Promise.all(promises)
      .then((res) => {
        promises = [];
        promises.push(res[0].json());
        promises.push(res[1].json());
        return Promise.all(promises);
      })
      .then((res) => {
        setState({
          commentCount: 0,
          likes: res[1].likes,
          views: res[0].pageViews,
        });
      });
  }, []);

  return (
    <aside
      className={`2xl:col-span-3 hidden xl:col-span-3 relative xl:flex justify-center items-start`}
    >
      <div className="fixed flex flex-col justify-center items-center mt-3">
        <StatsIcon
          stats={stats}
          theme={theme}
          commentCount={state.commentCount}
          likes={state.likes}
          views={state.views}
          setStats={setState}
        />
      </div>
    </aside>
  );
}

export default StatsBar;
