import React, {
  ReactElement,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { ThemeType } from "../../../types/globalTypes";

export interface Props {
  visible: boolean;
  children: ReactNode;
  theme: ThemeType;
  fref: React.RefObject<HTMLButtonElement>;
}

function DropDown({ visible, children, theme, fref }: Props): ReactElement {
  useEffect(() => {
    if (visible) {
      console.log("hcgcghcd", fref);

      fref.current?.focus();
    }
  }, [visible]);
  return (
    <button
      ref={fref}
      className={`${visible ? "h-auto p-2 border" : "h-0"} ${
        visible ? (theme === "light" ? "shadow-md border-b-2" : "") : ""
      } transition-all overflow-hidden flex duration-200 rounded-b-md justify-center flex-col w-48 absolute z-10 shadow-2xl border-accent-low-opa`}
    >
      {visible ? children : null}
    </button>
  );
}

export default DropDown;
