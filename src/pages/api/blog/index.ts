import { NextApiRequest, NextApiResponse } from "next";
import { fetchSingleBlog } from "../../../../lib/database/getBlogs";
import { useAuth } from "../../../../lib/middleware/authMW";
import { useCors } from "../../../../lib/middleware/corsMW";
import { getUri } from "../../../../util/misc";

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "put" || req.method === "PUT") {
    try {
      await useCors(req, res);
      await useAuth(req, res);

      const resp = await fetch(`${getUri("query")}/api/blog/hash`, {
        method: req.method,
        headers: req.headers as any,
        body: JSON.stringify(req.body),
      });

      if (!resp.ok) {
        throw "something went wrong";
      }

      const data = await resp.json();

      if (data?.message === "success") {
        res.status(201).json({ message: "success" });
      } else {
        throw "stupid error even though the req was authorized";
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "something went wrong oops" });
    }
  } else {
    try {
      await useCors(req, res);

      await useAuth(req, res);

      const id = req.body.id as string;

      const data = await fetchSingleBlog(id);
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json({ statusCode: 500, message: (err as any).message });
    }
  }
};

export default handler;
