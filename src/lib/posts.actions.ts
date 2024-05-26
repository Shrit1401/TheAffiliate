"use server";
import { db, supabase } from "@/db/db";
import { posts } from "@/db/schema";
import { PostPrompts } from "../../types";
import { handleError } from "./utils";

export const insertPostSample = async (post: PostPrompts) => {
  try {
    await db
      .insert(posts)
      .values(post)
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.error(error);
        }
      );
    console.log("Post inserted");
  } catch (error) {
    console.error(error);
  }
};

export const insertPost = async (post: PostPrompts) => {
  try {
    const res = await db.insert(posts).values(post).returning().execute();
    return res;
  } catch (error) {
    handleError(error);
  }
};
