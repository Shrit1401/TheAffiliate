import { z } from "zod";

export type PostPrompts = {
  id?: string;
  title: string;
  imageUrl: string;
  summary: string;
  category: string;
  description: string;
  price: string;
  url: string;
  upvotes?: number;
  isGood?: boolean;
};

export const Categories = ["Money", "Recents", "Food", "Health", "Tech"];

export type CardPrompts = {
  id?: string;
  title: string;
  summary: string;
  imageUrl: string;
  upvotes: number;
  price: string;
  url: string;
};

export const postSchema = z.object({
  imageUrl: z.string().optional(),
  title: z.string().min(5).max(20),
  summary: z.string().max(100),
  category: z.string(),
  upvotes: z.number().optional().default(0),
  description: z.string().min(1),
  price: z.string().min(1),
  url: z.string().url().min(1),
});

export type PostSchemaPrompts = z.infer<typeof postSchema>;
