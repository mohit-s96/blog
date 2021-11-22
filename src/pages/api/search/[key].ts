import { NextApiRequest, NextApiResponse } from "next";
import { fetchSearchQuery } from "../../../../lib/database/getBlogs";
import { useCors } from "../../../../lib/middleware/corsMW";
import { createClient } from "redis";
import { transformRedisKey } from "../../../../util/misc";
import rateLimit from "../../../../lib/middleware/limitMW";

const limiter = rateLimit({
  interval: 60 * 1000, // 60 seconds
  uniqueTokenPerInterval: 500, // Max 500 users per second
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await useCors(req, res);

    await limiter.check(res, 60, "CACHE_TOKEN"); // 60 requests per minute

    const client = createClient({
      url: process.env.REDIS_ENDPOINT_URI as string,
      password: process.env.REDIS_PASSWORD,
    });

    await client.connect();

    const key = req.query.key as string;

    const cached = await client.get(transformRedisKey(key));

    if (cached === null) {
      const response = await fetchSearchQuery(key);
      await client.setEx(
        transformRedisKey(key),
        345600, // 4 days
        JSON.stringify(response)
      );
      await client.quit();
      res.status(200).json(response);
    } else {
      await client.quit();

      res.status(200).json(cached);
    }
  } catch (err) {
    let message = "something went wrong";

    let code = 500;

    if (err === "limit reached") {
      message = err;
      code = 400;
    }

    res.status(code).json({ statusCode: code, message });
  }
};

export default handler;
