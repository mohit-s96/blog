import { dbConnect } from "./api";
import { BlogSlug } from "../../types/blogtypes";
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

export function updateBlog(editData: Partial<BlogSlug>) {
  const json = editData;
  const blogId = new ObjectId(json._id);
  delete json._id;
  return dbConnect(async (client) => {
    try {
      await client.connect();
      const cursor = client
        .db()
        .collection(process.env.BLOG_COLLECTION as string);
      await cursor.updateOne(
        { _id: blogId },
        {
          $set: {
            ...json,
          },
        }
      );
      return "success";
    } catch (error) {
      console.log(error);
      return Promise.reject("Server error");
    } finally {
      await client.close();
    }
  });
}
export function updateLikes(count: number, uri: string) {
  return dbConnect(async (client) => {
    try {
      await client.connect();
      const cursor = client
        .db()
        .collection(process.env.BLOG_COLLECTION as string);
      await cursor.updateOne(
        { uri },
        {
          $set: {
            likes: count + 1,
          },
        }
      );
      return "success";
    } catch (error) {
      console.log(error);
      return Promise.reject("Server error");
    } finally {
      await client.close();
    }
  });
}
