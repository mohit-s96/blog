import { useEffect, useRef } from "react";
import React, { ReactElement, useState } from "react";
import { ThemeType } from "../../../types/globalTypes";
import { Close, Search } from "../svg/collection.svg";
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
        value ? "dark:bg-gray-700 bg-primary-bg-light" : ""
      } transition-all duration-300 flex flex-col w-full-sm`}
    >
      <div
        className={`flex items-center rounded-full shadow-xl dark:bg-gray-700 bg-primary-bg-light`}
      >
        <input
          ref={inpRef}
          className={`rounded-l-full w-full py-4 px-6 text-2xl leading-tight focus:outline-none padding-sm dark:bg-gray-700 dark:text-white bg-primary-bg-light text-gray-700`}
          id="search"
          type="text"
          placeholder="Search [Ctrl + K]"
          value={value}
          onChange={handleSearchChange}
        />

        <div className="p-4 padding-sm flex">
          <span className="text-gray-400 p-1 text-xl mx-2">[Esc]</span>
          <button
            className="bg-primary-accent-light text-white rounded-full p-2 focus:outline-none w-10 h-10 flex items-center justify-center"
            aria-label="close search"
            onClick={() => {
              setValue("");
              ((inpRef.current as unknown) as HTMLInputElement).blur();
            }}
          >
            <Close color="#fff" />
          </button>
        </div>
      </div>
      {value ? <div className="top-loader-line"></div> : null}
      {value ? <SearchResults theme={theme} /> : null}
    </div>
  );
}

export default SearchBlogs;
