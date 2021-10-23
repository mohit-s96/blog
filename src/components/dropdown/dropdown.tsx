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
      fref.current?.focus();
    }
  }, [visible]);
  return (
    <button
      ref={fref}
      className={`${visible ? "h-auto p-2 border" : "h-0"} ${
        visible
          ? theme === "light"
            ? "shadow-md border-b-2 bg-primary-light"
            : "bg-primary-dark"
          : ""
      } transition-all overflow-hidden flex duration-200 rounded-b-md justify-center flex-col w-48 absolute shadow-2xl border-accent-low-opa translate-x-2/4`}
    >
      {visible ? children : null}
    </button>
  );
}

export default DropDown;
