import React, { ReactElement, ReactNode } from "react";

interface Props {
  children: ReactNode;
  variant: "small" | "medium";
}

function Tags({ children, variant }: Props): ReactElement {
  return (
    <button
      className={`bg-primary-light text-primary-text-light min-w-min border-none ${
        variant === "small" ? "p-1 rounded-brc-sm" : "p-3 rounded-brc-md"
      }`}
    >
      {children}
    </button>
  );
}

export default Tags;
