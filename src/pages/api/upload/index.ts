import { NextApiRequest, NextApiResponse } from "next";
import { useCors } from "../../../../lib/middleware/corsMW";
import { useAuth } from "../../../../lib/middleware/authMW";
import { uploadImage } from "../../../../lib/database/uploadImage";
import { parseFormData } from "../../../../lib/utils/parseFormData";
import { clearImages, resizeImages } from "../../../../lib/utils/imageResize";
import { SupaUploadResponseType } from "../../../../types/globalTypes";
import { logToFile } from "../../../../util/file-logger";

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

    const fileNames = (await resizeImages(data, fileName)) as any[];

    console.log(fileNames);

    let uri = (await uploadImage(
      fileNames,
      fileName
    )) as SupaUploadResponseType[];

    console.log(uri);

    await clearImages(fileNames);

    uri.forEach((x) => {
      if (x.data?.Key) {
        x.data!.Key = process.env.SUPA_URI_PREFIX + x.data.Key;
      }
    });

    res.status(201).json({ message: "uploaded successfully", uri });
  } catch (err) {
    res.status(400).json({ error: (err as any).message });
  }
};

export default handler;
