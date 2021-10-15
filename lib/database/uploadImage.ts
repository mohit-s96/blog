import { createClient } from "@supabase/supabase-js";

export async function uploadImage(buffer: Buffer, fileName: string) {
  const supabase = createClient(
    process.env.SUPA_URI as string,
    process.env.SUPA_KEY as string
  );

  return new Promise(async (resolve, reject) => {
    try {
      const fileExt = fileName?.split(".").pop();
      const { data: data, error } = await supabase.storage
        .from(process.env.SUPA_BUCKET_NAME as string)
        .upload(`public/${fileName}`, buffer, {
          contentType: `image/${fileExt}`,
        });
      if (error) {
        throw error;
      }
      resolve(data);
    } catch (err) {
      reject(err);
    }
  });
}
