import { integer, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const posts = pgTable("posts", {
  id: uuid("id").defaultRandom().primaryKey().notNull(),
  title: text("title").notNull(),
  imageUrl: text("image_url").notNull(),
  summary: text("summary").notNull(),
  category: text("category").notNull(),
  description: text("description").notNull(),
  price: text("price").notNull(),
  url: text("url").notNull(),
  upvotes: integer("upvotes").notNull().default(0),
  downvotes: integer("downvotes").notNull().default(0),
  createdAt: timestamp("timestamp1").notNull().defaultNow(),
});
