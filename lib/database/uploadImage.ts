import { createClient } from "@supabase/supabase-js";
import fs from "fs/promises";

export async function uploadImage(paths: string[], fileName: string) {
  const supabase = createClient(
    process.env.SUPA_URI as string,
    process.env.SUPA_KEY as string
  );
  return new Promise(async (resolve, reject) => {
    try {
      fileName = fileName.split(".").slice(0, -1).join("");
      fileName = fileName.replaceAll(" ", "");

      const fileExt = "webp";

      let promises: Promise<any>[] = [];

      const sizes: string[] = [];

      paths.forEach((path) => {
        const data = fs.readFile(path);
        const size = path.split("-").pop()?.split(".")[0];
        sizes.push(size!);
        promises.push(data);
      });

      const buffers = (await Promise.all(promises)) as Buffer[];

      promises = [];

      buffers.forEach((buf, i) => {
        const res = supabase.storage
          .from(process.env.SUPA_BUCKET_NAME as string)
          .upload(`public/${fileName}/${fileName}-${sizes[i]}.webp`, buf, {
            contentType: `image/${fileExt}`,
          });

        promises.push(res);
      });

      const resData = await Promise.all(promises);

      resData.forEach((x) => {
        if (x.error) {
          throw x.error;
        }
      });
      resolve(resData);
    } catch (err) {
      reject(err);
    }
  });
}
