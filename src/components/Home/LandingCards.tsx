import React, { useEffect } from "react";
import { PostPrompts } from "../../../types";
import { get9RandomPosts } from "@/lib/posts.actions";
import { handleError } from "@/lib/utils";
import Card from "../Global/Card";

const LandingCards = () => {
  const [posts, setPosts] = React.useState<PostPrompts[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await get9RandomPosts().catch((error) =>
        handleError(error)
      );
      setPosts(posts as PostPrompts[]);
    };

    fetchPosts();
  }, [setPosts]);

  return (
    <div className="flex w-full flex-col gap-2 mb-4 justify-center items-center px-4">
      <h2
        className="
        text-3xl md:text-4xl font-bold
        text-center
        text-white
      "
      >
        Best Affiliate Programs
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7 lg:gap-10 p-5 md:p-7 lg:p-10">
        {posts.map((post) => (
          <Card
            key={post.id}
            id={post.id}
            title={post.title}
            summary={post.summary}
            imageUrl={post.imageUrl!}
            likes={post.likes! || 0}
            price={post.price}
            url={post.url}
          />
        ))}
      </div>
      <a href="/affiliates" className="btn btn-primary w-64 animate-pulse">
        View More
      </a>
    </div>
  );
};

export default LandingCards;
