import Cors, { CorsOptions } from "cors";
import { NextApiRequest, NextApiResponse } from "next";
import initMiddleware from "./middleware";

export function useCors(
  req: NextApiRequest,
  res: NextApiResponse,
  options?: CorsOptions
): Promise<any> {
  const defaultOptions: CorsOptions = {
    methods: ["POST"],
    origin: "http://localhost:3000",
    credentials: true,
  };

  const finalOptions = options
    ? {
        ...defaultOptions,
        ...options,
      }
    : defaultOptions;

  const cors = initMiddleware(Cors(finalOptions));

  return cors(req, res);
}
