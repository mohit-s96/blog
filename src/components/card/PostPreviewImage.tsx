import React, { ReactElement } from "react";

interface Props {
  type: "horiz" | "vert";
  uri: string;
  alt: string;
}

function PostPreviewImage({ type, uri, alt }: Props): ReactElement {
  return (
    <div className={`${type === "horiz" ? "w-card-lg-vert" : "w-full"}`}>
      <img
        src={uri}
        alt={alt}
        className={`w-full h-full ${
          type === "horiz"
            ? "rounded-tl-3xl rounded-bl-3xl"
            : "rounded-tl-3xl rounded-tr-3xl"
        }`}
      />
    </div>
  );
}

export default PostPreviewImage;
