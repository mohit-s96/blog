import { NextApiRequest, NextApiResponse } from "next";
import { fetchBlogList } from "../../../../lib/getBlogs";

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data = await fetchBlogList();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: (err as any).message });
  }
};

export default handler;
