import { useEffect, useRef } from "react";
import React, { ReactElement, useState } from "react";
import { ThemeType } from "../../../types/globalTypes";
import { Search } from "../svg/collection.svg";
import SearchResults from "./searchResults";
import useGlobalKeyBind from "../../hooks/useGlobalKeyBind";
import { BindOptions } from "../../../types/keyTypes";

interface Props {
  theme: ThemeType;
}

function SearchBlogs({ theme }: Props): ReactElement {
  const [value, setValue] = useState("");

  const inpRef = useRef(null);

  const options: BindOptions = {
    options: [
      {
        keys: ["k"],
        specialKey: "Control",
        callback: () => {
          ((inpRef.current as unknown) as HTMLInputElement).focus();
        },
      },
      {
        keys: ["escape"],
        callback: () => {
          setValue("");
          ((inpRef.current as unknown) as HTMLInputElement).blur();
        },
      },
    ],
  };
  useGlobalKeyBind(options);

  const searchRef = useRef(null);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  useEffect(() => {
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
      className={`w-3/6 mx-auto my-4 h-20 rounded-3xl ${
        value ? (theme === "light" ? "bg-white" : "bg-gray-700") : ""
      } transition-all duration-300 flex flex-col w-full-sm`}
    >
      <div
        className={`${
          theme === "light" ? "bg-white" : "bg-gray-700"
        } flex items-center rounded-full shadow-xl`}
      >
        <input
          ref={inpRef}
          className={`rounded-l-full w-full py-4 px-6 text-2xl text-gray-700 leading-tight focus:outline-none ${
            theme === "dark"
              ? "bg-gray-700 text-white"
              : "bg-white text-gray-700"
          } padding-sm`}
          id="search"
          type="text"
          placeholder="Search [Ctrl + K]"
          value={value}
          onChange={handleSearchChange}
        />

        <div className="p-4 padding-sm">
          <button
            className="bg-primary-accent-light text-white rounded-full p-2 focus:outline-none w-12 h-12 flex items-center justify-center"
            aria-label="search blogs"
          >
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
