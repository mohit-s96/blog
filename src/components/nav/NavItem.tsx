import React, { ReactElement, ReactNode } from "react";
import { PRIMARY_ACCENT_LIGHT } from "../../../constants";
import { SizeVariantType, ThemeType } from "../../../types/globalTypes";
import { SvgProps } from "../svg/collection.svg";

export interface Props {
  children: ReactNode;
  size: "xsm" | SizeVariantType;
  theme: ThemeType;
  Icon?: (props: SvgProps) => JSX.Element;
  onClick?: () => any;
  className?: string;
  wrapperClassname?: string;
  placeIconAfterText?: boolean;
  renderButton?: boolean;
  buttonRef?: React.RefObject<HTMLButtonElement>;
  "aria-label"?: string;
  "aria-keyshortcuts"?: string;
}

function NavItem({
  className = "",
  children,
  size,
  theme,
  wrapperClassname = "",
  placeIconAfterText,
  Icon,
  onClick = () => {},
  buttonRef,
  renderButton = true,
  ...rest
}: Props): ReactElement {
  return (
    <div
      className={`focus:outline-black p-2 flex justify-center items-center font-bold ${
        size === "sm" ? "text-sm" : size === "xsm" ? "text-xsm" : "text-base"
      } cursor-pointer dark:text-primary-text-dark text-primary-accent-dark ${wrapperClassname}`}
      onClick={onClick}
    >
      {Icon && !placeIconAfterText && (
        <Icon
          color={theme === "dark" ? "#ffffff" : PRIMARY_ACCENT_LIGHT}
          size={size}
        />
      )}
      {renderButton ? (
        <button {...rest} className={`${className}`} ref={buttonRef}>
          {children}
        </button>
      ) : (
        children
      )}
      {Icon && placeIconAfterText && (
        <Icon
          color={theme === "dark" ? "#ffffff" : PRIMARY_ACCENT_LIGHT}
          size={size}
        />
      )}
    </div>
  );
}

export default NavItem;
