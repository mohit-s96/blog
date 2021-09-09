import React, { ReactElement, ReactNode } from "react";
import { SvgProps } from "../svg/collection.svg";

export interface Props {
  children: ReactNode;
  size: "xsm" | "sm" | "md";
  theme: "light" | "dark";
  Icon?: ({ color, size }: SvgProps) => JSX.Element;
}

function NavItem({ children, size, theme, Icon }: Props): ReactElement {
  return (
    <div
      className={`p-2 flex justify-center items-center font-bold ${
        size === "sm" ? "text-sm" : size === "xsm" ? "text-xsm" : "text-base"
      } ${
        theme === "light"
          ? "text-secondary-text-light"
          : "text-primary-text-dark"
      }`}
    >
      {Icon && <Icon color={theme} size={size} />}
      <span className="ml-2">{children}</span>
    </div>
  );
}

export default NavItem;
