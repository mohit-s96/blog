import React, { ReactElement } from "react";
import { ThemeType } from "../../../types/globalTypes";
import Tags from "../tags/Tags";

interface Props {
  theme: ThemeType;
}

function SearchResults({ theme }: Props): ReactElement {
  return (
    <div
      className={`p-2 m-2 flex flex-col ${
        theme === "dark" ? "bg-primary-bg-dark" : "bg-primary-bg-light"
      } w-[98%] mx-auto rounded-2xl`}
    >
      <div className="flex justify-between">
        <p className="p-2 text-xl text-primary-accent-dark text-sm-res padding-0-res">
          designing in figma
        </p>
        <p className="p-2 text-xl text-primary-accent-dark text-sm-res padding-0-res">
          5 minute read
        </p>
      </div>
      <div className="flex">
        <Tags
          children="#css"
          accent
          variant="sm"
          className="mr-2 font-bold p-4 padding-0-res"
        />
        <Tags
          children="#figma"
          accent
          variant="sm"
          className="mr-2 font-bold p-4 padding-0-res"
        />
      </div>
    </div>
  );
}

export default SearchResults;
