import React, { Dispatch, ReactElement, SetStateAction, useState } from "react";
import { ThemeType } from "../../../types/globalTypes";
import { NightIcon, SunIcon } from "../svg/collection.svg";

interface Props {
  setTheme: Dispatch<SetStateAction<ThemeType>>;
}

function ToggleTheme({ setTheme }: Props): ReactElement {
  const [dark, setDark] = useState(false);

  const handleChange = () => {
    if (dark) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
    setDark(!dark);
  };

  return (
    <div className="mr-8">
      <label htmlFor="toggleB" className="flex items-center cursor-pointer">
        <div className="relative">
          <input
            type="checkbox"
            id="toggleB"
            className="sr-only"
            onChange={handleChange}
            aria-label="toggle theme"
          />
          <div className="block bg-gray-300 w-14 h-6 rounded-full"></div>
          <div
            className="dot absolute left-1 top-1 w-8 h-6 rounded-full transition flex justify-center items-center"
            style={{
              transform: dark ? "translateX(80%)" : "translateX(-25%)",
            }}
          >
            <div
              style={{
                height: "100%",
                width: "100%",
                transform: "translateY(-25%)",
                marginBottom: "2px",
              }}
            >
              {dark ? <NightIcon /> : <SunIcon />}
            </div>
          </div>
        </div>
      </label>
    </div>
  );
}

export default ToggleTheme;
