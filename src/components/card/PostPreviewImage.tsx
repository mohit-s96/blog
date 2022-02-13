import React, { ReactElement } from "react";
import { NewImageData } from "../../../types/blogtypes";
import { LayoutType } from "../../../types/globalTypes";
import ResImage from "./resImages";

interface Props {
  type: LayoutType;
  images: NewImageData;
  wrapperClass?: string;
}

function PostPreviewImage({
  type,
  images,
  wrapperClass = "",
}: Props): ReactElement {
  return (
    <div
      className={`${
        type === "horiz" ? "w-card-lg-vert" : "w-full"
      } ${wrapperClass}`}
    >
      <ResImage
        className={`w-full ${
          type === "horiz"
            ? "rounded-tl-md rounded-bl-md"
            : "rounded-tl-3xl rounded-tr-3xl"
        }`}
        alt={images.alt}
        uris={images.permUri}
      />
    </div>
  );
}

export default PostPreviewImage;
