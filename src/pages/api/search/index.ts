import { NextApiRequest, NextApiResponse } from "next";
import { useCors } from "../../../../lib/middleware/corsMW";
import { useAuth } from "../../../../lib/middleware/authMW";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await useCors(req, res);

    await useAuth(req, res);

    res.status(200).json({ message: "hello" });
  } catch (err) {
    let code = 500;
    if ((err as any)?.message === "Unauthorized") {
      code = 400;
    }
    res.status(code).json({ statusCode: code, message: (err as any).message });
  }
};

export default handler;
