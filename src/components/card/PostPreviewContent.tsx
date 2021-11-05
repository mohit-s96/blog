import React, { ReactElement } from "react";
import { DeviceTypes, LayoutType, ThemeType } from "../../../types/globalTypes";
import { Clock, MIcon } from "../svg/collection.svg";
import PostExcerpt from "./PostExcerpt";
import PostTags from "./PostTags";
import PostTitle from "./PostTitle";
import Avatar from "../avatars/Avatar";
import NavItem from "../nav/NavItem";

interface Props {
  theme: ThemeType;
  type: LayoutType;
  title: string;
  excerpt: string;
  tags: Array<string>;
  time: number;
  device?: DeviceTypes;
  slug?: string;
}

function PostPreviewContent({
  excerpt,
  time,
  title,
  tags,
  type,
  theme,
  slug,
}: Props): ReactElement {
  return (
    <div
      className={`${
        type === "horiz" ? "w-card-lg-horiz" : "w-full min-h-[50%]"
      } ${
        type === "horiz"
          ? "rounded-br-3xl rounded-tr-3xl"
          : "rounded-br-3xl rounded-bl-3xl"
      } dark:bg-primary-dark bg-primary-light`}
    >
      <div className={`p-2 flex flex-col h-full justify-evenly`}>
        <div className="flex items-center p-1 justify-between">
          <Avatar alt="author avatar" size="md">
            <MIcon color="rgb(106, 39, 159)" className="w-9 h-9" />
          </Avatar>
          <NavItem size="sm" theme={theme} children={time} Icon={Clock} />
        </div>
        <PostTitle text={title} theme={theme} type={type} slug={slug} />
        <PostExcerpt text={excerpt} theme={theme} type={type} />
        <PostTags tags={tags} theme={theme} type={type} />
      </div>
    </div>
  );
}

export default PostPreviewContent;
