import { ObjectId } from "bson";
import { SupaUploadResponseType } from "./globalTypes";

export type BlogPathNames = {
  _id: ObjectId;
  pathNames: Array<string>;
};

export interface BlogMetadata {
  links: string[];
  atMentions: string[];
  hashTags: string[];
}
export interface NewImageData {
  permUri: SupaUploadResponseType[];
  alt: string;
  uri?: string;
  isHero?: boolean | undefined;
}
export type SlugType = "html" | "md" | "nm";

export interface BlogSlug {
  _id?: ObjectId;
  rawBody?: string;
  title: string;
  uri: string;
  tags: string[];
  createdAt: number;
  images: NewImageData[];
  blogData: string;
  shares: number;
  likes: number;
  excerpt: string;
  author: string;
  commentsAllowed: boolean;
  commentCount: number;
  metadata?: BlogMetadata;
  viewCount: number;
  slugType: SlugType;
}

export type RelatedBlogsType = Array<
  Pick<BlogSlug, "uri" | "tags" | "title" | "_id">
>;

export interface CommentMetadata {
  links: string[];
  markdown: string;
  atMentions: string[];
}

export interface CommentSlug {
  _id: ObjectId;
  blogId: string;
  createdAt: number;
  author: string;
  inReplyToUser: string;
  isAdmin: boolean;
  hasMarkdown: boolean;
  isVisible: boolean;
  isDeleted: boolean;
  metadata: CommentMetadata;
  inReplyToComment: ObjectId | "";
  body: string;
}

export type BlogListType = Omit<BlogSlug, "metadata" | "blogData">;
