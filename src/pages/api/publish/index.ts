import { NextApiRequest, NextApiResponse } from "next";
import { useCors } from "../../../../lib/middleware/corsMW";
import { useAuth } from "../../../../lib/middleware/authMW";
import { BlogSlug } from "../../../../types/blogtypes";
import { addBlog } from "../../../../lib/database/updateBlogData";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await useCors(req, res);

    await useAuth(req, res);

    const blogData = req.body.data as BlogSlug;

    if (!blogData) {
      throw new Error("bad payload, no data received");
    }

    await addBlog(blogData);

    res.status(201).json({ message: "blog published successfully" });
  } catch (err) {
    res.status(400).json({ error: (err as any).message });
  }
};

export default handler;
