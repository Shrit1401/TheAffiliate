"use server";
import { db } from "@/db/db";
import { submits } from "@/db/schema";
import { SubmitPrompts } from "../../types";
import { handleError } from "./utils";

export const submitPost = async (submitPost: SubmitPrompts) => {
  try {
    const res = await db
      .insert(submits)
      .values(submitPost)
      .returning()
      .execute();
    return res;
  } catch (error) {
    handleError(error);
  }
};
