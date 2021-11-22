import { NextApiRequest, NextApiResponse } from "next";
import { fetchSearchQuery } from "../../../../lib/database/getBlogs";
import { useCors } from "../../../../lib/middleware/corsMW";
import { createClient } from "redis";
import { transformRedisKey } from "../../../../util/misc";
import { useLimit } from "../../../../lib/middleware/limitMW";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await useCors(req, res);

    const forwarded = req.headers["x-forwarded-for"];
    const ip = forwarded
      ? (forwarded as string).split(/, /)[0]
      : req.connection.remoteAddress;
    //@ts-ignore
    req.ip = ip;

    await useLimit(req, res);

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
    res.status(500).json({ statusCode: 500, message: (err as any).message });
  }
};

export default handler;
