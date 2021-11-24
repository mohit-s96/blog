import { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "redis";
import { updateLikes } from "../../../../lib/database/updateBlogData";
import { useCors } from "../../../../lib/middleware/corsMW";
import rateLimit from "../../../../lib/middleware/limitMW";
import { transformRedisKey } from "../../../../util/misc";

const limiter = rateLimit({
  interval: 60 * 1000, // 60 seconds
  uniqueTokenPerInterval: 500, // Max 500 users per second
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const client = createClient({
    url: process.env.REDIS_ENDPOINT_URI as string,
    password: process.env.REDIS_PASSWORD,
  });

  await client.connect();
  try {
    await useCors(req, res);

    if (req.method === "post" || req.method === "POST") {
      await limiter.check(res, 5, "CACHE_TOKEN"); // 5 likes per minute

      const uri = req.body.uri as string;

      if (!uri) {
        throw Error("invalid request");
      }

      let cachedLikes = (await client.get(
        transformRedisKey("likes-" + uri)
      )) as number | string;

      cachedLikes = cachedLikes ? +cachedLikes : 0;

      const response = await updateLikes(cachedLikes, uri);

      await client.setEx(
        transformRedisKey("likes-" + uri),
        345600,
        "" + (cachedLikes + 1)
      );

      res.status(200).json({ message: response });
    } else if (req.method === "GET" || req.method === "get") {
      const uri = req.query.uri as string;

      let cachedLikes = (await client.get(
        transformRedisKey("likes-" + uri)
      )) as number | string;

      cachedLikes = cachedLikes ? +cachedLikes : 0;

      res.status(200).json({ likes: cachedLikes });
    } else {
      throw Error("invalid method");
    }
  } catch (err) {
    res.status(400).json({ error: (err as any).message });
  } finally {
    await client.quit();
  }
};

export default handler;
