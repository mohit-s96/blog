import { NextApiRequest, NextApiResponse } from "next";
import { fetchSearchQuery } from "../../../../lib/database/getBlogs";
import { useCors } from "../../../../lib/middleware/corsMW";
import redis from "redis";
import {
  getRedisKey,
  setRedisKey,
  transformRedisKey,
} from "../../../../util/misc";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await useCors(req, res);

    const client = redis.createClient(
      process.env.REDIS_ENDPOINT_URI as string,
      {
        password: process.env.REDIS_PASSWORD,
      }
    );

    const key = req.body.key as string;

    const cached = await getRedisKey(client, transformRedisKey(key));

    if (cached === null) {
      const response = await fetchSearchQuery(key);
      await setRedisKey(
        client,
        transformRedisKey(key),
        345600,
        JSON.stringify(response)
      );
      res.status(200).json(response);
    } else {
      res.status(200).json(cached);
    }
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: (err as any).message });
  }
};

export default handler;
