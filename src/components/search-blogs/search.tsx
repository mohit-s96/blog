import { useEffect, useRef } from "react";
import React, { ReactElement, useState } from "react";
import { ThemeType } from "../../../types/globalTypes";
import { Search } from "../svg/collection.svg";
import SearchResults from "./searchResults";

interface Props {
  theme: ThemeType;
}

function SearchBlogs({ theme }: Props): ReactElement {
  const [value, setValue] = useState("");

  const searchRef = useRef(null);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  useEffect(() => {
    console.log(value);

    if (value) {
      ((searchRef.current as unknown) as HTMLDivElement).classList.add("h-400");
    } else {
      ((searchRef.current as unknown) as HTMLDivElement).classList.remove(
        "h-400"
      );
    }
  }, [value]);
  return (
    <div
      ref={searchRef}
      className={`w-3/6 mx-auto mb-4 h-20 rounded-3xl ${
        value ? (theme === "light" ? "bg-white" : "bg-gray-700") : ""
      } transition-all duration-300 flex flex-col`}
    >
      <div
        className={`${
          theme === "light" ? "bg-white" : "bg-gray-700"
        } flex items-center rounded-full shadow-xl`}
      >
        <input
          className={`rounded-l-full w-full py-4 px-6 text-2xl text-gray-700 leading-tight focus:outline-none ${
            theme === "dark"
              ? "bg-gray-700 text-white"
              : "bg-white text-gray-700"
          }`}
          id="search"
          type="text"
          placeholder="Search"
          value={value}
          onChange={handleSearchChange}
        />

        <div className="p-4">
          <button className="bg-primary-accent-light text-white rounded-full p-2 focus:outline-none w-12 h-12 flex items-center justify-center">
            <Search color="#fff" />
          </button>
        </div>
      </div>
      {value ? <div className="top-loader-line"></div> : null}
      {value ? <SearchResults theme={theme} /> : null}
    </div>
  );
}

export default SearchBlogs;
