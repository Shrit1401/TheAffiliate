import {
  boolean,
  integer,
  pgTable,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";

export const posts = pgTable("posts", {
  id: uuid("id").defaultRandom().primaryKey().notNull(),
  title: text("title").notNull(),
  imageUrl: text("image_url").notNull(),
  summary: text("summary").notNull(),
  price: text("price").notNull(),
  url: text("url").notNull(),
  likes: integer("likes").notNull().default(0),
  createdAt: timestamp("timestamp1").notNull().defaultNow(),
});

export const submits = pgTable("submits", {
  name: text("name").notNull(),
  email: text("email").notNull(),
  id: uuid("id").defaultRandom().primaryKey().notNull(),
  title: text("title").notNull(),
  imageUrl: text("image_url").notNull(),
  summary: text("summary").notNull(),
  price: text("price").notNull(),
  url: text("url").notNull(),
  createdAt: timestamp("timestamp1").notNull().defaultNow(),
});
