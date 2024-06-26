import * as dotenv from "dotenv";
import * as schema from "./schema";
dotenv.config({ path: ".env.local" });
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export const supabase = createClientComponentClient({
  supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL!,
  supabaseKey: process.env.SUPABASE_KEY!,
});
const client = postgres(process.env.DATABASE_URL!);
export const db = drizzle(client, { schema });
