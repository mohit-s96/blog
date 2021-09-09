import React, { ReactElement, ReactNode } from "react";
import { Solid } from "../svg/collection.svg";

export interface TagProps {
  children: ReactNode;
  variant: "sm" | "md";
  theme: "light" | "dark";
  triangular?: boolean;
  accent?: boolean;
}

function Tags({
  children,
  variant,
  theme,
  triangular,
  accent,
}: TagProps): ReactElement {
  return (
    <button
      className={`${
        triangular
          ? `relative before:absolute before:h-0 before:w-0 ${
              variant === "sm" ? "before:left-sm" : "before:left-md"
            } before:top-0 ${
              variant === "sm" ? "before:border-t-sm-2" : "before:border-t-md-2"
            } ${
              variant === "sm" ? "before:border-r-sm" : "before:border-r-md"
            } ${
              variant === "sm" ? "before:border-b-sm-2" : "before:border-b-md-2"
            } before:border-l-0 before:border-t-transparent before:border-b-transparent ${
              !accent
                ? theme === "light"
                  ? "before:border-r-primary-light"
                  : "before:border-r-primary-dark"
                : "before:border-r-primary-accent-light flex items-center justify-center"
            }`
          : ""
      } ${
        !accent
          ? theme === "dark"
            ? "font-bold bg-primary-dark"
            : "font-bold bg-primary-light"
          : "font-bold bg-primary-accent-light flex items-center justify-center"
      } ${
        theme === "dark" ? "text-primary-text-dark" : "text-primary-text-light"
      } ${variant === "md" ? "min-w-btn-md" : "min-w-btn-sm"} ${
        variant === "md" ? "h-btn-md" : "h-btn-sm"
      } border-none ${
        !triangular
          ? variant === "md"
            ? "rounded-brc-md"
            : "rounded-brc-sm"
          : ""
      } text-sm p-2 px-8`}
    >
      {children}
    </button>
  );
}
export function Sort() {
  return (
    <Tags theme="dark" variant="sm" accent={true}>
      Sort <Solid color="dark" />
    </Tags>
  );
}
export default Tags;
