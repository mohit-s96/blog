import { NextApiRequest, NextApiResponse } from "next";
import { useCors } from "../../../../lib/middleware/corsMW";
import { useAuth } from "../../../../lib/middleware/authMW";
import { BlogSlug } from "../../../../types/blogtypes";
import { updateBlog } from "../../../../lib/database/updateBlogData";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await useCors(req, res);

    await useAuth(req, res);

    const blogData = req.body.data as Partial<BlogSlug>;

    if (!blogData) {
      throw new Error("bad payload, no data received");
    }

    await updateBlog(blogData);

    res.status(201).json({ message: "blog updated successfully" });
  } catch (err) {
    res.status(400).json({ error: (err as any).message });
  }
};

export default handler;
