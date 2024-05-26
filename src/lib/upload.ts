import { handleError } from "./utils";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export const uploadImage = async (
  file: File,
  title: string
): Promise<string | undefined> => {
  try {
    const supabase = createClientComponentClient({
      supabaseUrl: process.env.PROJECT_URL!,
      supabaseKey: process.env.SUPABASE_API_KEY!,
    });

    const fileName = `${file.name}_${title.replace(/\s/g, "")}`;

    const { error: uploadError } = await supabase.storage
      .from("postImage")
      .upload(fileName, file, {
        cacheControl: "5",
        upsert: true,
      });

    if (uploadError) throw uploadError;

    const { data } = supabase.storage.from("postImage").getPublicUrl(fileName);

    return data.publicUrl;
  } catch (error) {
    handleError(error);
    return undefined;
  }
};
