import React, { ReactElement, ReactNode } from "react";
import { SizeVariantType, ThemeType } from "../../../types/globalTypes";
import { SvgProps } from "../svg/collection.svg";

export interface Props {
  children: ReactNode;
  size: "xsm" | SizeVariantType;
  theme: ThemeType;
  Icon?: ({ color, size }: SvgProps) => JSX.Element;
  callback?: () => any;
  className?: string;
  wrapperClassname?: string;
}

function NavItem({
  className = "",
  children,
  size,
  theme,
  wrapperClassname,
  Icon,
  callback = () => {},
}: Props): ReactElement {
  return (
    <div
      className={`focus:outline-black p-2 flex justify-center items-center font-bold ${
        size === "sm" ? "text-sm" : size === "xsm" ? "text-xsm" : "text-base"
      } cursor-pointer dark:text-primary-text-dark text-primary-accent-dark ${wrapperClassname}`}
      onClick={() => callback()}
    >
      {Icon && (
        <Icon color={theme === "dark" ? "#ffffff" : "#6A279F"} size={size} />
      )}
      <span className={`ml-2 ${className}`}>{children}</span>
    </div>
  );
}

export default NavItem;
