import { NextApiRequest, NextApiResponse } from "next";
import Cookies from "cookies";
import { useCors } from "../../../../lib/corsMW";
import { useAuth } from "../../../../lib/authMW";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await useCors(req, res);

    await useAuth(req, res);

    const cookies = new Cookies(req, res);
    cookies.set("token");
    res.status(200).json({ message: "success" });
  } catch (err) {
    res.status(400).json({ error: (err as any).message });
  }
};

export default handler;
