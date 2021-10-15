import { NextApiRequest, NextApiResponse } from "next";
import Busboy from "busboy";

export function parseFormData(req: NextApiRequest, res: NextApiResponse) {
  return new Promise((resolve, reject) => {
    try {
      const busboy = new Busboy({
        headers: req.headers,
        limits: {
          files: 1,
        },
      });

      let imageFileName = "";

      busboy.on("file", (_fieldname, file, filename, _encoding, mimetype) => {
        if (
          mimetype !== "image/jpg" &&
          mimetype !== "image/png" &&
          mimetype !== "image/jpeg"
        ) {
          return res.status(400).json({ error: "Not an image" });
        }
        const buf: any = [];

        imageFileName = filename;

        file.on("data", (d) => {
          buf.push(d);
        });

        file.on("end", async () => {
          const data = Buffer.concat(buf);
          resolve({
            data,
            fileName: imageFileName,
          });
        });
      });

      req.pipe(busboy);
    } catch (error) {
      reject("something went wrong");
    }
  });
}
