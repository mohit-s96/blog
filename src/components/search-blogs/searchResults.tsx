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
        <p className="p-2 text-xl text-primary-accent-dark">
          designing in figma
        </p>
        <p className="p-2 text-xl text-primary-accent-dark">5 minute read</p>
      </div>
      <div className="flex">
        <Tags
          children="#css"
          accent
          variant="sm"
          className="mx-2 font-bold p-4"
        />
        <Tags
          children="#figma"
          accent
          variant="sm"
          className="mx-2 font-bold p-4"
        />
      </div>
    </div>
  );
}

export default SearchResults;
