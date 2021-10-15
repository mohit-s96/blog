import { NextApiRequest, NextApiResponse } from "next";
import { useCors } from "../../../../lib/middleware/corsMW";
import { useAuth } from "../../../../lib/middleware/authMW";
import { uploadImage } from "../../../../lib/database/uploadImage";
import { parseFormData } from "../../../../lib/utils/parseFormData";

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await useCors(req, res);

    await useAuth(req, res);

    const { data, fileName } = (await parseFormData(req, res)) as any;

    let uri = (await uploadImage(data, fileName)) as any;

    uri = process.env.SUPA_URI_PREFIX + uri.Key;

    res.status(201).json({ message: "uploaded successfully", uri });
  } catch (err) {
    res.status(400).json({ error: (err as any).message });
  }
};

export default handler;
