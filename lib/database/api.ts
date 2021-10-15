import { MongoClient } from "mongodb";

type mongoCallback<T> = (client: MongoClient) => Promise<T>;

export async function dbConnect<T>(cb: mongoCallback<T>) {
  const client = new MongoClient(process.env.MONGO_URI as string);
  return cb(client);
}
