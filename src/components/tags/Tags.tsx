import React, { ReactElement, ReactNode } from "react";

export interface TagProps {
  children: ReactNode;
  variant: "sm" | "md";
  theme: "light" | "dark";
  triangular?: boolean;
}

function Tags({
  children,
  variant,
  theme,
  triangular,
}: TagProps): ReactElement {
  return (
    <button
      className={`${
        triangular
          ? `relative before:absolute before:h-0 before:w-0 before:left-${variant} before:top-0 before:border-t-${variant}-2 before:border-r-${variant} before:border-b-${variant}-2 before:border-l-0 before:border-transparent before:border-r-bg-primary-${theme}`
          : ""
      } font-bold bg-primary-${theme} text-primary-text-${theme} min-w-btn-${variant} h-btn-${variant} border-none rounded-brc-${variant} text-sm p-2`}
    >
      {children}
    </button>
  );
}

export default Tags;
