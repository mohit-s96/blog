import React, { ReactElement, useState } from "react";
import { ThemeType } from "../../../types/globalTypes";
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
        visible ? (theme === "dark" ? "" : "shadow-md border-b-2") : ""
      } transition-all overflow-hidden flex duration-200 rounded-b-md justify-center flex-col w-36 absolute z-10 top-12`}
    >
      <div
        className={`p-2 flex justify-between cursor-pointer dark:bg-primary-dark bg-primary-light`}
        onClick={() => setActive("date")}
      >
        <span className={`dark:text-primary-text-dark text-primary-text-light`}>
          Date
        </span>
        {active === "date" && <Check accent={true} />}
      </div>
      <div
        className={`p-2 flex justify-between cursor-pointer dark:bg-primary-dark bg-primary-light`}
        onClick={() => setActive("pop")}
      >
        <span className={`dark:text-primary-text-dark text-primary-text-light`}>
          Popularity
        </span>
        {active === "pop" && <Check accent={true} />}
      </div>
    </div>
  );
}

export default SortMenu;
