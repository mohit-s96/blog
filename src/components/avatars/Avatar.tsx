import React, { ReactElement } from "react";
import { SizeVariantType } from "../../../types/globalTypes";

export interface Props {
  imageUri: string;
  size: SizeVariantType | "lg";
  alt: string;
  className?: string;
}

export default function Avatar({
  imageUri,
  size,
  alt,
  className = "",
}: Props): ReactElement {
  return (
    <div className="inline-block">
      <img
        width={200}
        height={200}
        src={imageUri}
        alt={alt}
        className={`rounded ${
          size === "sm"
            ? "w-avat-img-sm"
            : size === "md"
            ? "w-avat-img-md"
            : size === "lg"
            ? "w-avat-img-lg"
            : "w-avat-img-sm"
        } ${className}`}
      />
    </div>
  );
}
