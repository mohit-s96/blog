import React, { ReactElement, useEffect, useState } from "react";
import { BlogSlug } from "../../../types/blogtypes";
import { ThemeType } from "../../../types/globalTypes";
import { getUri } from "../../../util/misc";
import StatsIcon from "./statsIcon";
import { useRouter } from "next/router";

interface Props {
  stats: Pick<
    BlogSlug,
    "commentCount" | "likes" | "viewCount" | "uri" | "title"
  >;
  theme: ThemeType;
}

function StatsBar({ stats, theme }: Props): ReactElement {
  const [state, setState] = useState({ views: 0, likes: 0, commentCount: 0 });
  const router = useRouter();

  useEffect(() => {
    let promises: Array<Promise<any>> = [];
    const queryParams = `?slug=/blog/${stats.uri}`;
    promises.push(
      fetch(`${getUri()}/api/stats${queryParams}`, {
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
          commentCount: res[0].count,
          likes: res[1].likes,
          views: res[0].pageViews,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [router]);

  return (
    <aside
      className={`hidden xl:flex justify-center items-start absolute top-[10%] left-[5%]`}
    >
      <div className=" flex flex-col justify-center items-center mt-3">
        <StatsIcon
          stats={stats}
          theme={theme}
          commentCount={state.commentCount || 0}
          likes={state.likes || 0}
          views={state.views || 0}
          setStats={setState}
        />
      </div>
    </aside>
  );
}

export default StatsBar;
