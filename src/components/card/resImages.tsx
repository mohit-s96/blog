import React, { ReactElement, useState } from "react";
import { SupaUploadResponseType } from "../../../types/globalTypes";
interface Props {
  uris: SupaUploadResponseType[];
  alt: string;
  className?: string;
  priority?: boolean;
}

function ResImage({
  uris,
  alt,
  className = "",
  priority = false,
}: Props): ReactElement {
  const lowresIndex = uris.length === 3 ? 0 : 3;
  const [hidden, setHidden] = useState(true);
  return (
    <>
      {hidden ? (
        <img
          src={uris[lowresIndex].data?.Key}
          title={alt}
          alt={alt}
          className={className}
          width="400"
          height="225"
          loading={"lazy"}
        />
      ) : null}
      <picture>
        <source media="(max-width: 600px)" srcSet={uris[1].data?.Key} />
        <source media="(min-width: 601px)" srcSet={uris[2].data?.Key} />
        <img
          onLoad={() => {
            setHidden(false);
          }}
          style={{
            opacity: hidden ? 0 : 1,
            position: hidden ? "absolute" : "unset",
          }}
          src={uris[2].data?.Key}
          title={alt}
          alt={alt}
          className={className}
          width="400"
          height="225"
          loading={"lazy"}
        />
      </picture>
    </>
  );
}

export default ResImage;
