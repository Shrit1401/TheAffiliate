import { z } from "zod";

export type PostPrompts = {
  id?: string;
  title: string;
  imageUrl: string;
  summary: string;
  price: string;
  url: string;
  likes?: number;
};
export type VotingCardProps = {
  id?: string;
  title: string;
  summary: string;
  price: string;
  url: string;
};

export type SubmitPrompts = {
  id?: string;
  name: string;
  email: string;
  title: string;
  imageUrl: string;
  summary: string;
  price: string;
  url: string;
};

export const Categories = ["Money", "Recents", "Food", "Health", "Tech"];

export type CardPrompts = {
  id?: string;
  title: string;
  summary: string;
  imageUrl: string;
  likes: number;
  price: string;
  url: string;
};

export const postSchema = z.object({
  name: z.string().min(1).max(20),
  email: z.string().email().min(1).max(20),
  imageUrl: z.string().optional(),
  title: z.string().min(5).max(20),
  summary: z.string().max(100),
  likes: z.number().optional().default(0),
  price: z.string().min(1),
  url: z.string().url().min(1),
});

export type PostSchemaPrompts = z.infer<typeof postSchema>;
