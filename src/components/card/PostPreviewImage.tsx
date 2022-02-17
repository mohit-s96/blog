import React, { ReactElement } from "react";
import { NewImageData } from "../../../types/blogtypes";
import { LayoutType } from "../../../types/globalTypes";
import ResImage from "./resImages";

interface Props {
  type: LayoutType;
  images: NewImageData;
  wrapperClass?: string;
  lowres?: string;
}

function PostPreviewImage({
  type,
  images,
  wrapperClass = "",
  lowres,
}: Props): ReactElement {
  return (
    <div
      className={`overflow-hidden ${
        type === "horiz" ? "w-[202px] h-[114px]" : "w-full"
      } ${wrapperClass}`}
    >
      <ResImage
        className={`hidden md:block w-full ${
          type === "horiz"
            ? "rounded-tl-md rounded-bl-md"
            : "rounded-tl-3xl rounded-tr-3xl"
        }`}
        alt={images.alt}
        uris={images.permUri}
        lowres={lowres}
      />
    </div>
  );
}

export default PostPreviewImage;
