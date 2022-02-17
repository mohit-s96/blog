import { useRouter } from "next/router";
import React, { ReactElement, useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { SupaUploadResponseType } from "../../../types/globalTypes";
interface Props {
  uris: SupaUploadResponseType[];
  alt: string;
  className?: string;
  priority?: boolean;
  lowres?: string;
  forceload?: boolean;
}

function ResImage({
  uris,
  alt,
  className = "",
  priority = false,
  lowres,
  forceload = false,
}: Props): ReactElement {
  const [src, setSrc] = useState("");
  const imageRef = useRef<HTMLImageElement>(null);
  const { asPath } = useRouter();
  useEffect(() => {
    /**
     * only load non-content images on medium or > devices or if the page is a blog page in which case we atleast have to show the hero image
     */
    if (window.innerWidth >= 768 || (/\/blog\/*/.test(asPath) && forceload)) {
      const uri = uris[2].data?.Key!;
      const image = new Image();
      image.onload = () => {
        setSrc(uri);
        imageRef.current?.classList.remove("blur-img");
        imageRef.current?.classList.add("blur-anim");
      };
      image.src = uri;
    }
  }, []);

  return (
    <div className="h-full w-full relative">
      <img
        src={lowres}
        title={alt}
        alt={alt}
        className={"blur-lg hue-rotate-15 " + className}
        width="400"
        height="225"
      />
      <picture className="">
        <source
          media="(max-width: 600px)"
          srcSet={src.length ? uris[1].data?.Key : ""}
        />
        <source
          media="(min-width: 601px)"
          srcSet={src.length ? uris[2].data?.Key : ""}
        />
        <img
          ref={imageRef}
          src={src}
          title={alt}
          alt={alt}
          className={"absolute top-0 left-0 blur-img " + className}
          width="400"
          height="225"
          loading={priority ? "eager" : "lazy"}
        />
      </picture>
    </div>
  );
}

export default ResImage;
