import { ObjectId } from "mongodb";
import { BlogPathNames, BlogSlug, CommentSlug } from "../types/blogtypes";
import fs from "fs";
import { dbConnect } from "./api";

export function fetchBlogs() {
  return dbConnect<Array<BlogSlug>>(async (client) => {
    try {
      await client.connect();
      const cursors = client
        .db()
        .collection(process.env.BLOG_COLLECTION as string)
        .find({});
      const blogs = (await cursors.toArray()) as Array<BlogSlug>;
      return blogs;
    } catch (e) {
      console.error(e);
      return Promise.reject(
        "Something went wrong. Error => " + JSON.stringify(e)
      );
    } finally {
      await client.close();
    }
  });
}

export function fetchSingleBlog(str: string) {
  return dbConnect<BlogSlug>(async (client) => {
    try {
      await client.connect();
      const cursors = client
        .db()
        .collection(process.env.BLOG_COLLECTION as string)
        .findOne({ url: str }, {});
      const blogs = (await cursors) as BlogSlug;
      return blogs;
    } catch (e) {
      console.error(e);
      return Promise.reject(
        "Something went wrong. Error => " + JSON.stringify(e)
      );
    } finally {
      await client.close();
    }
  });
}

export function fetchComments(idString: string) {
  const blogId = new ObjectId(idString);
  return dbConnect<CommentSlug>(async (client) => {
    try {
      await client.connect();
      const cursors = client
        .db()
        .collection(process.env.BLOG_COMMENTS as string)
        .findOne({ blogId }, {});
      const blogs = (await cursors) as CommentSlug;
      fs.writeFileSync("data.json", JSON.stringify(blogs), "utf-8");
      return blogs;
    } catch (e) {
      console.error(e);
      return Promise.reject(
        "Something went wrong. Error => " + JSON.stringify(e)
      );
    } finally {
      await client.close();
    }
  });
}

export function fetchPathData() {
  return dbConnect<BlogPathNames>(async (client) => {
    try {
      await client.connect();
      const cursors = client
        .db()
        .collection(process.env.BLOG_PATHS as string)
        .findOne();
      const blogs = (await cursors) as BlogPathNames;
      return blogs;
    } catch (e) {
      console.error(e);
      return Promise.reject(
        "Something went wrong. Error => " + JSON.stringify(e)
      );
    } finally {
      await client.close();
    }
  });
}
