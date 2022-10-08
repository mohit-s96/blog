import { NextApiRequest, NextApiResponse } from "next";
import Cookies from "cookies";
import { useCors } from "../../../../lib/middleware/corsMW";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await useCors(req, res);
    const uname = req.body.uname;
    const pass = req.body.pass;
    const cookies = new Cookies(req, res);

    if (uname === process.env.UNAME && pass === process.env.PASS) {
      cookies.set("token", process.env.SECRET, {
        httpOnly: true,
        domain:
          process.env.NODE_ENV != "production" ? "localhost" : ".mohits.dev",
      });
      res.status(200).json({ message: "success" });
    } else {
      throw new Error("Unauthorized");
    }
  } catch (err) {
    res.status(400).json({ error: (err as any).message });
  }
};

export default handler;
