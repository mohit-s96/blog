import { createClient } from "@supabase/supabase-js";
import { readImage } from "./supa";

export async function uploadImage(filePath: string) {
  const supabase = createClient(
    process.env.SUPA_URI as string,
    process.env.SUPA_KEY as string
  );

  const imgData = readImage(filePath);
  try {
    const fileName = filePath.split("/").pop();
    const fileExt = fileName?.split(".").pop();
    const { data, error } = await supabase.storage
      .from(process.env.SUPA_BUCKET_NAME as string)
      .upload(`public/${fileName}`, imgData, {
        contentType: `image/${fileExt}`,
      });
    if (error) {
      throw error;
    }
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
