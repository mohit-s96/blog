import { NextApiRequest, NextApiResponse } from "next";
import Cors from "cors";
import initMiddleware from "../../../../lib/middleware";
import { fetchBlogList } from "../../../../lib/getBlogs";

// Initialize the cors middleware
const cors = initMiddleware(
  Cors({
    methods: ["GET", "POST", "OPTIONS"],
  })
);

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await cors(req, res);
    const data = await fetchBlogList();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: (err as any).message });
  }
};

export default handler;
