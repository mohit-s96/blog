import React from "react";
import { PRIMARY_ACCENT_LIGHT } from "../../../constants";
import Avatar from "../avatars/Avatar";
import PostExcerpt from "../card/PostExcerpt";
import { CardProps } from "../card/PostPreview";
import PostPreviewImage from "../card/PostPreviewImage";
import PostTags from "../card/PostTags";
import PostTitle from "../card/PostTitle";
import NavItem from "../nav/NavItem";
import { MIcon, Clock } from "../svg/collection.svg";

function HorizCard({
  blog: { images, title, excerpt, tags, uri: slug, createdAt: time },
  theme,
  layoutType: type = "horiz",
}: CardProps) {
  return (
    <div className="flex md:p-4 md:mb-0 mb-3">
      {/* <div className="hidden md:block"> */}
      <PostPreviewImage
        type={type}
        images={images[0]}
        wrapperClass="hidden md:block"
      />
      {/* </div> */}
      <div className={`px-2 flex flex-col h-full justify-evenly w-full`}>
        <PostTitle text={title} theme={theme} type={type} slug={slug} />
        <div className="flex items-center justify-between">
          {/* <Avatar alt="author avatar" size="md">
            <MIcon color={PRIMARY_ACCENT_LIGHT} className="w-6 h-6" />
          </Avatar> */}
          {/* <div className="hidden md:block"> */}
          <PostTags
            tags={tags}
            theme={theme}
            type={type}
            className="hidden md:inline"
          />
          {/* </div> */}
          <NavItem
            size="sm"
            theme={theme}
            children={time}
            // Icon={Clock}
            className="md:mx-2 sm:font-light"
          />
        </div>
        <PostExcerpt text={excerpt} theme={theme} type={type} />
      </div>
    </div>
  );
}

export default HorizCard;
