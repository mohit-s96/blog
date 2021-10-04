import { createClient } from "@supabase/supabase-js";

export async function uploadImage(buffer: Buffer, fileName: string) {
  const supabase = createClient(
    process.env.SUPA_URI as string,
    process.env.SUPA_KEY as string
  );

  try {
    const fileExt = fileName?.split(".").pop();
    const { data: _data, error } = await supabase.storage
      .from(process.env.SUPA_BUCKET_NAME as string)
      .upload(`public/${fileName}`, buffer, {
        contentType: `image/${fileExt}`,
      });
    if (error) {
      throw error;
    }
  } catch (err) {
    throw err;
  }
}
