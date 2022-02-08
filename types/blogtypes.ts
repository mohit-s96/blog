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
  readingTime: string;
  lastEdited: number | null;
  isArchived: boolean;
}

export type RelatedBlogsType = Array<
  Pick<BlogSlug, "uri" | "tags" | "title" | "_id">
>;

export interface CommentMetadata {
  links: string[];
  markdown: string;
  atMentions: string[];
}

export interface CommentSchema {
  _id?: ObjectId | string;
  blogId: string | ObjectId;
  createdAt: number;
  author: string;
  authorGhId: number;
  inReplyToUser: string | number;
  isAdmin: boolean;
  hasMarkdown: boolean;
  isVisible: boolean;
  isDeleted: boolean;
  inReplyToComment: ObjectId | string;
  body: string;
  html: string;
  hadIllegalHtml: boolean;
  lastUpdated: number;
  deletedAt: number;
  inReplyToUsername: string;
  authorAvatar: string;
}

export type UserSubmittedCommentSchema = Omit<
  CommentSchema,
  | "createdAt"
  | "author"
  | "authorGhId"
  | "isAdmin"
  | "isVisible"
  | "isDeleted"
  | "html"
  | "hadIllegalHtml"
  | "lastUpdated"
  | "deletedAt"
  | "authorAvatar"
>;

export type BlogListType = Omit<BlogSlug, "metadata" | "blogData">;
