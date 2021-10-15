import { dbConnect } from "./api";
import fs from "fs";
import { BlogSlug, CommentSlug } from "../../types/blogtypes";
import { ObjectId } from "mongodb";
export function addBlog(reqData: BlogSlug) {
  const json = reqData;
  return dbConnect(async (client) => {
    try {
      await client.connect();
      const cursor = client
        .db()
        .collection(process.env.BLOG_COLLECTION as string);
      const data = await cursor.insertOne(json);
      return data;
    } catch (error) {
      console.log(error);

      return Promise.reject("Server error");
    } finally {
      await client.close();
    }
  });
}

export function addComment() {
  const data = fs.readFileSync("data.json", "utf-8");
  const json = JSON.parse(data) as CommentSlug;
  (json.blogId as any) = new ObjectId(json.blogId);
  (json.inReplyToComment as any) = new ObjectId(json.inReplyToComment);
  return dbConnect(async (client) => {
    try {
      await client.connect();
      const cursor = client
        .db()
        .collection(process.env.BLOG_COMMENTS as string);
      const data = await cursor.insertOne(json);
      return data;
    } catch (error) {
      console.log(error);

      return Promise.reject("Server error");
    } finally {
      await client.close();
    }
  });
}
