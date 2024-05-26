CREATE TABLE IF NOT EXISTS "posts" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" text NOT NULL,
	"image_url" text NOT NULL,
	"summary" text NOT NULL,
	"category" text NOT NULL,
	"description" text NOT NULL,
	"price" text NOT NULL,
	"url" text NOT NULL,
	"upvotes" integer DEFAULT 0 NOT NULL,
	"downvotes" integer DEFAULT 0 NOT NULL,
	"created_at" timestamp with time zone
);
--> statement-breakpoint
DROP TABLE "users";