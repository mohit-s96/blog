import { NextApiRequest, NextApiResponse } from "next";
import Cookies from "cookies";
import Cors from "cors";
import initMiddleware from "../../../../lib/middleware";

// Initialize the cors middleware
const cors = initMiddleware(
  Cors({
    methods: ["GET", "POST", "OPTIONS"],
    origin: "http://localhost:3000",
    credentials: true,
  })
);

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await cors(req, res);
    const uname = req.body.uname;
    const pass = req.body.pass;
    const cookies = new Cookies(req, res);

    if (uname === process.env.UNAME && pass === process.env.PASS) {
      cookies.set("token", process.env.SECRET, {
        httpOnly: true,
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
