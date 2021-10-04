import { NextApiRequest, NextApiResponse } from "next";
import { fetchBlogList } from "../../../../lib/getBlogs";
import { useAuth } from "../../../../lib/authMW";
import { useCors } from "../../../../lib/corsMW";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await useCors(req, res);

    await useAuth(req, res);

    const data = await fetchBlogList();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: (err as any).message });
  }
};

export default handler;
