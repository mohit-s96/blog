import { NextApiRequest, NextApiResponse } from "next";
import { fetchSingleBlog } from "../../../../lib/database/getBlogs";
import { useAuth } from "../../../../lib/middleware/authMW";
import { useCors } from "../../../../lib/middleware/corsMW";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await useCors(req, res);

    await useAuth(req, res);

    const id = req.body.id as string;

    const data = await fetchSingleBlog(id);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: (err as any).message });
  }
};

export default handler;
