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
        visible ? "dark:bg-primary-dark bg-primary-light" : ""
      }  transition-all overflow-hidden flex duration-200 rounded-b-md justify-center flex-col w-48 absolute shadow-2xl border-primary-accent-light z-10`}
    >
      {visible ? children : null}
    </button>
  );
}

export default DropDown;
