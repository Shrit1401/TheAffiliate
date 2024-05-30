import { handleError } from "@/lib/utils";
import { useEffect, useState } from "react";
import { PostPrompts } from "../../../types";
import { isGoodPosts } from "@/lib/posts.actions";
import Image from "next/image";

const TopAffiliate = () => {
  const [posts, setPosts] = useState<PostPrompts[]>([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await isGoodPosts().catch((error) => handleError(error));
      setPosts(posts as PostPrompts[]);
    };
    fetchPosts();
  }, []);

  return (
    <>
      <div className="text-center text-4xl font-bold mb-4">Top Affiliates</div>
      <div className="flex justify-center flex-col gap-4">
        <div className="container mx-auto p-4 flex justify-center items-center">
          <div className="grid grid-cols-1 text-left md:grid-cols-2 gap-4 md:gap-16">
            {posts.map((post, index) => (
              <div
                key={post.id}
                className="flex flex-row justify-between items-center gap-4 py-2"
              >
                <div className="number w-12 text-center">
                  <span className="text-2xl font-bold text-primary">
                    {index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </span>
                </div>
                <div className="flex-1">
                  <h1 className="text-2xl font-medium">{post.title}</h1>
                </div>
                <div className="flex-shrink-0">
                  <a
                    href={`/affiliates/${post.id}`}
                    className="btn btn-outline flex items-center gap-2"
                  >
                    <span>Learn More</span>
                    <Image
                      alt="arrow"
                      src="/images/arrow.svg"
                      className="invert"
                      width={20}
                      height={20}
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <a href="/affiliates" className="btn btn-primary text-xl m-auto">
          View All
        </a>
      </div>
    </>
  );
};

export default TopAffiliate;
