import type { Metadata } from "next";
import { PostPrompts } from "../../../../../types";

export async function generateMetadata(post: PostPrompts): Promise<Metadata> {
  return {
    title: `${post.title}`,
    description:
      "details of this affiliate program on TheAffiliate.io and learn how to maximize your earnings. Find expert insights, reviews, and more!",
    icons: {
      icon: "images/icon_dark.svg",
    },
  };
}
