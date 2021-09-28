import { NextApiRequest, NextApiResponse } from "next";
import Cookies from "cookies";
import Cors from "cors";
import initMiddleware from "../../../../lib/middleware";

// Initialize the cors middleware
const cors = initMiddleware(
  Cors({
    methods: ["POST"],
    origin: "http://localhost:3000",
    credentials: true,
  })
);

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await cors(req, res);
    const cookies = new Cookies(req, res);
    const str = cookies.get("token");
    if (str === process.env.SECRET) {
      res.status(200).json({ message: "success" });
    } else {
      throw new Error("Unauthorized");
    }
  } catch (err) {
    res.status(400).json({ error: (err as any).message });
  }
};

export default handler;
