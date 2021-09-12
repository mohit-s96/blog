import React, { ReactElement, useState } from "react";
import { Check } from "../svg/collection.svg";

export interface Props {
  visible: boolean;
  theme?: ThemeType;
}

function SortMenu({ visible, theme }: Props): ReactElement {
  const [active, setActive] = useState("date");
  return (
    <div
      className={`${visible ? "h-auto p-2" : "h-0"} ${
        visible ? (theme === "light" ? "shadow-md border-b-2" : "") : ""
      } transition-all overflow-hidden flex duration-200 rounded-b-md justify-center flex-col w-36 absolute z-10 top-12`}
    >
      <div
        className={`${
          theme === "light" ? "bg-primary-light" : "bg-primary-dark"
        } p-2 flex justify-between cursor-pointer`}
        onClick={() => setActive("date")}
      >
        <span
          className={`${
            theme === "light"
              ? "text-primary-text-light"
              : "text-primary-text-dark"
          }`}
        >
          Date
        </span>
        {active === "date" && <Check accent={true} />}
      </div>
      <div
        className={`${
          theme === "light" ? "bg-primary-light" : "bg-primary-dark"
        } p-2 flex justify-between cursor-pointer`}
        onClick={() => setActive("pop")}
      >
        <span
          className={`${
            theme === "light"
              ? "text-primary-text-light"
              : "text-primary-text-dark"
          }`}
        >
          Popularity
        </span>
        {active === "pop" && <Check accent={true} />}
      </div>
    </div>
  );
}

export default SortMenu;
