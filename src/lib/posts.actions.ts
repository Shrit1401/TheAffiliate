"use server";
import { db } from "@/db/db";
import { posts } from "@/db/schema";
import { PostPrompts } from "../../types";
import { handleError } from "./utils";
import { AnyColumn, desc, eq, sql } from "drizzle-orm";

const increment = (column: AnyColumn, value = 1) => {
  return sql`${column} + ${value}`;
};

const decrement = (column: AnyColumn, value = 1) => {
  return sql`${column} - ${value}`;
};

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

export const getAllPosts = async () => {
  try {
    const res = await db.query.posts.findMany({
      orderBy: [desc(posts.createdAt)],
    });
    return res as PostPrompts[];
  } catch (error) {
    handleError(error);
    throw error;
  }
};

export const getHotPosts = async () => {
  try {
    const res = await db.query.posts.findMany({
      orderBy: [desc(posts.upvotes)],
      limit: 10,
    });
    return res as PostPrompts[];
  } catch (error) {
    handleError(error);
  }
};

export const getPostById = async (postId: string) => {
  try {
    const res = await db.query.posts.findFirst({
      where: eq(posts.id, postId),
    });
    return res as PostPrompts;
  } catch (error) {
    handleError(error);
  }
};

export const incrementUpvotes = async (postId: string) => {
  try {
    const res = await db
      .update(posts)
      .set({ upvotes: increment(posts.upvotes) })
      .where(eq(posts.id, postId))
      .execute();
  } catch (error) {
    handleError(error);
  }
};

export const decrementUpvotes = async (postId: string) => {
  try {
    const res = await db
      .update(posts)
      .set({ upvotes: decrement(posts.upvotes) })
      .where(eq(posts.id, postId))
      .execute();
  } catch (error) {
    handleError(error);
  }
};

export const isGoodPosts = async () => {
  try {
    const res = await db.query.posts.findMany({
      where: eq(posts.isGood, true),
      limit: 10,
    });
    return res as PostPrompts[];
  } catch (error) {
    handleError(error);
  }
};
