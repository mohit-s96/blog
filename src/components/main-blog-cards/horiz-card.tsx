import { format, fromUnixTime } from "date-fns";
import React from "react";
import PostExcerpt from "../card/PostExcerpt";
import { CardProps } from "../card/PostPreview";
import PostPreviewImage from "../card/PostPreviewImage";
import PostTags from "../card/PostTags";
import PostTitle from "../card/PostTitle";
import NavItem from "../nav/NavItem";

function HorizCard({
  blog: { images, title, excerpt, tags, uri: slug, createdAt: time },
  theme,
  layoutType: type = "horiz",
}: CardProps) {
  return (
    <div className="flex md:p-4 md:mb-0 mb-3">
      <PostPreviewImage
        type={type}
        images={images.find((img) => img.isHero)!}
        wrapperClass="hidden md:block"
      />
      <div className={`px-2 flex flex-col h-full justify-evenly w-full`}>
        <PostTitle text={title} theme={theme} type={type} slug={slug} />
        <div className="flex items-center justify-between">
          <PostTags
            tags={tags}
            theme={theme}
            type={type}
            className="hidden md:inline"
          />
          <NavItem
            size="sm"
            theme={theme}
            renderButton={false}
            children={
              <time
                title={format(time, "do MMM, yy, HH:mm aaa")}
                dateTime={fromUnixTime(time).toUTCString()}
              >
                {format(time, "do MMM, yy")}
              </time>
            }
            className="md:mx-2 sm:font-light"
          />
        </div>
        <PostExcerpt text={excerpt} theme={theme} type={type} />
      </div>
    </div>
  );
}

export default HorizCard;
