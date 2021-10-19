import { ObjectId } from "mongodb";
import { BlogListType, BlogSlug, CommentSlug } from "../../types/blogtypes";
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
        .findOne({ uri: str }, {});
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
  return dbConnect<string[]>(async (client) => {
    try {
      await client.connect();
      const cursors = client
        .db()
        .collection(process.env.BLOG_COLLECTION as string)
        .find({}, { projection: { uri: 1, _id: 0 } });
      const paths = ((await cursors.toArray()) as unknown) as Array<{
        uri: string;
      }>;
      return paths.map((path) => path.uri);
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
export function fetchBlogList() {
  return dbConnect<[BlogListType]>(async (client) => {
    try {
      await client.connect();
      const cursors = client
        .db()
        .collection(process.env.BLOG_COLLECTION as string)
        .find({}, { projection: { blogData: 0, metadata: 0 } });
      const blogs = (await cursors.toArray()) as [BlogListType];
      return blogs;
    } catch (e) {
      console.error(e);
      return Promise.reject(
        "Something went wrong. Error => " + (e as any).message
      );
    } finally {
      await client.close();
    }
  });
}
