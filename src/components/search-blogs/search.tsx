import { useEffect, useRef } from "react";
import React, { ReactElement, useState } from "react";
import { ThemeType } from "../../../types/globalTypes";
import { Close, Search } from "../svg/collection.svg";
import SearchResults from "./searchResults";
import useGlobalKeyBind from "../../hooks/useGlobalKeyBind";
import { BindOptions } from "../../../types/keyTypes";
import useAnimateOnMount from "../../hooks/useAnimateOnMount";

interface Props {
  theme: ThemeType;
  visible: boolean;
}

function SearchBlogs({ theme, visible }: Props): ReactElement {
  const [value, setValue] = useState("");

  const inpRef = useRef(null);

  const searchRef = useRef(null);

  useAnimateOnMount(searchRef, "scale-norm opacity-norm", { value }); //scale-norm is a css class i made to scale to 1 and made it important because tailwinf scale-100 wan't working go figure

  useEffect(() => {
    if (visible) {
      ((inpRef.current as any) as HTMLInputElement).focus();
    }
  }, [visible]);

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
    <div className="absolute top-2 z-10 left-0 flex justify-between bg-[rgba(0,0,0,0.8)] w-full h-screen">
      <div
        ref={searchRef}
        className={`w-3/6 mx-auto my-4 h-20 rounded-3xl ${
          value ? "dark:bg-gray-700 bg-gray-100" : ""
        } transition-all duration-300 flex flex-col w-full-sm scale-0 opacity-0 mt-[5%] shadow-2xl`}
      >
        <div
          className={`flex items-center rounded-full shadow-xl dark:bg-gray-700 bg-gray-100`}
        >
          <input
            ref={inpRef}
            className={`rounded-l-full w-full py-4 px-6 text-2xl leading-tight focus:outline-none padding-sm dark:bg-gray-700 dark:text-white bg-gray-100 text-gray-700`}
            id="search"
            type="text"
            placeholder="search blogs"
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
    </div>
  );
}

export default SearchBlogs;
