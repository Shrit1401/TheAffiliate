"use server";
import { db } from "@/db/db";
import { posts } from "@/db/schema";
import { PostPrompts, VotingCardProps } from "../../types";
import { handleError } from "./utils";
import { AnyColumn, desc, eq, sql } from "drizzle-orm";

const increment = (column: AnyColumn, value = 1) => {
  return sql`${column} + ${value}`;
};

const decrement = (column: AnyColumn, value = 1) => {
  return sql`${column} - ${value}`;
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
      orderBy: [desc(posts.likes)],
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

export const incrementLikes = async (postId: string) => {
  try {
    const res = await db
      .update(posts)
      .set({ likes: increment(posts.likes) })
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
      .set({ likes: decrement(posts.likes) })
      .where(eq(posts.id, postId))
      .execute();
  } catch (error) {
    handleError(error);
  }
};

export const isGoodPosts = async () => {
  try {
    const res = await db.query.posts.findMany({
      limit: 10,
      orderBy: [sql`RANDOM()`],
    });
    return res as PostPrompts[];
  } catch (error) {
    handleError(error);
  }
};

export const chooseTwoRandomPosts = async () => {
  try {
    const res = await db.query.posts.findMany({
      limit: 2,
      orderBy: [sql`RANDOM()`],
    });
    return res as VotingCardProps[];
  } catch (error) {
    handleError(error);
  }
};
