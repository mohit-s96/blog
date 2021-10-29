import { NextApiRequest, NextApiResponse } from "next";
import { useCors } from "../../../../lib/middleware/corsMW";
import fs from "fs/promises";
import os from "os";
import path from "path";
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await useCors(req, res);
    const logs = await fs.readFile(path.join(os.tmpdir(), "updebug.log"), {
      encoding: "utf8",
    });
    res.status(200).json({ message: logs });
  } catch (err) {
    res.status(400).json({ error: (err as any).message });
  }
};

export default handler;
