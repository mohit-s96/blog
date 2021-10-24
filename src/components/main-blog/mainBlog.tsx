import React, { ReactElement } from "react";
import { BlogSlug } from "../../../types/blogtypes";
import { ThemeType } from "../../../types/globalTypes";
import BlogContents from "./blogContents";

interface Props {
  theme: ThemeType;
  data: BlogSlug;
}

function MainBlog({ theme, data }: Props): ReactElement {
  return (
    <main className="2xl:col-span-6 xl:col-span-6 col-span-12 flex justify-center">
      <BlogContents theme={theme} data={data} />
    </main>
  );
}

export default MainBlog;
