ALTER TABLE "posts" ADD COLUMN "is_good" boolean DEFAULT false NOT NULL;--> statement-breakpoint
ALTER TABLE "posts" DROP COLUMN IF EXISTS "downvotes";