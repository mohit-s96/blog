import React, { Dispatch, ReactElement, SetStateAction } from "react";
import { BlogSlug } from "../../../types/blogtypes";
import { ThemeType } from "../../../types/globalTypes";
import BlogContents from "./blogContents";

interface Props {
  theme: ThemeType;
  data: BlogSlug;
  setCommentCount: Dispatch<SetStateAction<number>>;
}

function MainBlog({ theme, data, setCommentCount }: Props): ReactElement {
  return (
    <main className="xl:w-7/12 lg:w-10/12 w-full flex justify-center">
      <BlogContents
        theme={theme}
        data={data}
        setCommentCount={setCommentCount}
      />
    </main>
  );
}

export default MainBlog;
