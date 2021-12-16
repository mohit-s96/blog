import { NextApiRequest, NextApiResponse } from "next";
import { useCors } from "../../../../lib/middleware/corsMW";
import { useAuth } from "../../../../lib/middleware/authMW";
import rateLimit from "../../../../lib/middleware/limitMW";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const limiter = rateLimit({
    interval: 60 * 1000, // 60 seconds
    uniqueTokenPerInterval: 500, // Max 500 users per second
  });
  try {
    await useCors(req, res);

    await limiter.check(res, 5, "CACHE_TOKEN"); // 60 requests per minute

    await useAuth(req, res);

    if (!(req.method === "post" || req.method === "POST")) {
      throw Error("invalid request method");
    }

    await fetch(process.env.VERCEL_DEPOY_HOOK as string, {
      method: "POST",
    });

    res.status(200).json({ message: "success" });
  } catch (err) {
    res.status(400).json({ error: (err as any).message });
  }
};

export default handler;
