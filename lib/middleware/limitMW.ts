import Cors, { CorsOptions } from "cors";
import { NextApiRequest, NextApiResponse } from "next";
import initMiddleware from "./middleware";
import rateLimit from "express-rate-limit";

export function useLimit(
  req: NextApiRequest,
  res: NextApiResponse,
  options?: CorsOptions
): Promise<any> {
  //@ts-ignore
  console.log(req.ip);

  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // limit each IP to 100 requests per windowMs
  });

  const limit = initMiddleware(limiter);

  return limit(req, res);
}
