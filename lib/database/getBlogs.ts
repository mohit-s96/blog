import { ObjectId } from "mongodb";
import { BlogListType, BlogSlug } from "../../types/blogtypes";
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

export function fetchPathData() {
  return dbConnect<string[]>(async (client) => {
    try {
      await client.connect();
      const cursors = client
        .db()
        .collection(process.env.BLOG_COLLECTION as string)
        .find({ isArchived: false }, { projection: { uri: 1, _id: 0 } });
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
export function fetchBlogList(admin?: boolean) {
  const find = admin ? {} : { isArchived: false };
  return dbConnect<[BlogListType]>(async (client) => {
    try {
      await client.connect();
      const cursors = client
        .db()
        .collection(process.env.BLOG_COLLECTION as string)
        .find({ ...find }, { projection: { blogData: 0, metadata: 0 } });
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

export function fetchSearchQuery(key: string) {
  return dbConnect<Array<Partial<BlogSlug>>>(async (client) => {
    try {
      await client.connect();
      const cursors = client
        .db()
        .collection(process.env.BLOG_COLLECTION as string)
        .aggregate([
          {
            $search: {
              index: "default",
              text: {
                query: key,
                path: {
                  wildcard: "*",
                },
              },
            },
          },
          {
            $project: {
              title: 1,
              uri: 1,
              tags: 1,
              createdAt: 1,
              isArchived: 1,
              images: 1,
              excerpt: 1,
            },
          },
        ]);
      let blogs = (await cursors.toArray()) as Array<Partial<BlogSlug>>;
      blogs = blogs.filter((blog) => !blog.isArchived);
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
