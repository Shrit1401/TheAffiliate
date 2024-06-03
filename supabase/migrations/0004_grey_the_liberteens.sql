CREATE TABLE IF NOT EXISTS "submits" (
	"name" text NOT NULL,
	"email" text NOT NULL,
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" text NOT NULL,
	"image_url" text NOT NULL,
	"summary" text NOT NULL,
	"category" text NOT NULL,
	"description" text NOT NULL,
	"price" text NOT NULL,
	"url" text NOT NULL,
	"likes" integer DEFAULT 0 NOT NULL,
	"timestamp1" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "posts" RENAME COLUMN "upvotes" TO "likes";--> statement-breakpoint
ALTER TABLE "posts" DROP COLUMN IF EXISTS "is_good";