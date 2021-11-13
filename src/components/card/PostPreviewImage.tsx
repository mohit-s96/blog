import React, { ReactElement } from "react";
import { NewImageData } from "../../../types/blogtypes";
import { LayoutType } from "../../../types/globalTypes";
import ResImage from "./resImages";

interface Props {
  type: LayoutType;
  images: NewImageData;
}

function PostPreviewImage({ type, images }: Props): ReactElement {
  return (
    <div className={`${type === "horiz" ? "w-card-lg-vert" : "w-full"}`}>
      <ResImage
        className={`w-full ${
          type === "horiz"
            ? "rounded-tl-3xl rounded-bl-3xl"
            : "rounded-tl-3xl rounded-tr-3xl"
        }`}
        alt={images.alt}
        uris={images.permUri}
      />
    </div>
  );
}

export default PostPreviewImage;
