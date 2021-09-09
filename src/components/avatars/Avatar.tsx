import React, { ReactElement } from "react";

export interface Props {
  imageUri: string;
  size: "sm" | "md" | "lg";
  alt: string;
}

export default function Avatar({ imageUri, size, alt }: Props): ReactElement {
  console.log(imageUri);

  return (
    <div className="inline-block">
      <img
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
        }`}
      />
    </div>
  );
}
