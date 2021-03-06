import Cookies from "cookies";
import { NextApiRequest, NextApiResponse } from "next";
import initMiddleware from "./middleware";

function authMW(req: NextApiRequest, res: NextApiResponse, next: any) {
  const cookies = new Cookies(req, res);
  const str = cookies.get("token");
  if (str === process.env.SECRET) {
    //@ts-ignore
    req.auth = { token: str };
    next(true);
  } else {
    // next(new Error("Unauthorized"));
    throw new Error("Unauthorized");
  }
}

export function useAuth(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<any> {
  const auth = initMiddleware(authMW);
  return auth(req, res);
}
