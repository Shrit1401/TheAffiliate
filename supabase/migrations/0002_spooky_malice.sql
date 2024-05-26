ALTER TABLE "posts" RENAME COLUMN "created_at" TO "timestamp1";--> statement-breakpoint
ALTER TABLE "posts" ALTER COLUMN "timestamp1" SET DATA TYPE timestamp;--> statement-breakpoint
ALTER TABLE "posts" ALTER COLUMN "timestamp1" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "posts" ALTER COLUMN "timestamp1" SET NOT NULL;