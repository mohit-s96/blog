import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import React, { ReactElement, useState } from "react";
import { ThemeType } from "../../../types/globalTypes";
import { Close } from "../svg/collection.svg";
import SearchResults from "./searchResults";
import useAnimateOnMount from "../../hooks/useAnimateOnMount";
import { BlogSlug } from "../../../types/blogtypes";
import { useFetch } from "../../hooks/useFetch";

interface Props {
  theme: ThemeType;
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
}

async function fetcher(uri: string, body?: string) {
  const json = await fetch(uri + `/${body}`, {
    credentials: "include",
    method: "POST",
  });
  let data;

  if (json.ok) {
    data = await json.json();
  } else {
    throw new Error("internal server error");
  }

  return data as [Partial<BlogSlug>];
}

function SearchBlogs({ theme, visible, setVisible }: Props): ReactElement {
  const [value, setValue] = useState("");

  const inpRef = useRef(null);

  const searchRef = useRef(null);

  const { fetchResource, data, error, loading } = useFetch(
    "/api/search",
    fetcher,
    true,
    86400
  );

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
      if (value.trim().length > 3) {
        fetchResource(value.trim());
      }
    } else {
      ((searchRef.current as unknown) as HTMLDivElement).classList.remove(
        "h-400"
      );
    }
  }, [value]);
  return (
    <div className="absolute top-0 z-10 left-0 flex justify-between bg-[rgba(0,0,0,0.8)] w-full h-screen">
      <div
        ref={searchRef}
        className={`w-3/6 mx-auto my-4 h-20 rounded-3xl ${
          value ? "dark:bg-gray-700 bg-gray-100" : ""
        } transition-all duration-300 flex flex-col w-full-sm scale-0 opacity-0 mt-[5%] shadow-2xl`}
      >
        <div
          className={`flex items-center rounded-[42px] shadow-xl dark:bg-gray-700 bg-gray-100`}
        >
          <input
            ref={inpRef}
            className={`rounded-l-full w-full py-4 px-6 res-inp-h text-2xl leading-tight focus:outline-none padding-sm dark:bg-gray-700 dark:text-white bg-gray-100 text-gray-700`}
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
                setVisible(false);
              }}
            >
              <Close color="#fff" />
            </button>
          </div>
        </div>
        {loading ? <div className="top-loader-line"></div> : null}
        {data?.length && value.length > 3
          ? data.map((res) => (
              <SearchResults
                data={res}
                key={(res._id as any) as string}
                setVisible={setVisible}
              />
            ))
          : null}
      </div>
    </div>
  );
}

export default SearchBlogs;
