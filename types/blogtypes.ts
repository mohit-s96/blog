import { ObjectId } from "bson";

export type BlogPathNames = {
  _id: ObjectId;
  pathNames: Array<string>;
};

export interface BlogImages {
  alt: string;
  uri: string;
  isHero?: boolean;
}

export interface BlogMetadata {
  links: string[];
  atMentions: string[];
  hashTags: string[];
}

export interface BlogSlug {
  _id: ObjectId;
  title: string;
  uri: string;
  tags: string[];
  createdAt: number;
  images: BlogImages[];
  blogData: string;
  shares: number;
  likes: number;
  excerpt: string;
  author: string;
  commentsAllowed: string;
  commentCount: number;
  viewCount: number;
  readingTime: string;
}

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
