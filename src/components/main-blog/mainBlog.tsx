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
    <main className="xl:w-6/12 lg:w-10/12 w-full flex justify-center">
      <BlogContents theme={theme} data={data} />
    </main>
  );
}

export default MainBlog;
