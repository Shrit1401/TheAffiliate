"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import {
  decrementUpvotes,
  getPostById,
  incrementUpvotes,
} from "@/lib/posts.actions";
import { PostPrompts } from "../../../../../types";
import { BackgroundBeams } from "@/components/Global/BackgroundBeams";
import toast from "react-hot-toast";
import Image from "next/image";

const AffiliateProgramPage = () => {
  const { postid } = useParams();
  const [post, setPost] = useState<PostPrompts | null>(null);
  const [upvoted, setUpvoted] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      const fetchedPost = await getPostById(postid as string);
      setPost(fetchedPost as PostPrompts);
    };
    fetchPost();
  }, [postid]);

  useEffect(() => {
    const storedUpvote = localStorage.getItem(`upvoted-${postid}`);
    if (storedUpvote) {
      setUpvoted(true);
    }
  }, [postid]);

  const handleUpvote = () => {
    if (upvoted) {
      localStorage.removeItem(`upvoted-${postid}`);
      setUpvoted(false);
      decrementUpvotes(postid as string);
      toast("Upvote removed", {
        icon: "😭",
        style: {
          background: "#333",
          color: "#fff",
        },
      });
    } else {
      localStorage.setItem(`upvoted-${postid}`, "true");
      setUpvoted(true);
      incrementUpvotes(postid as string);
      toast.success("Upvoted successfully!", {
        style: {
          background: "#333",
          color: "#fff",
        },
      });
    }
  };

  if (!post) {
    return (
      <div className="flex justify-center items-center gap-4 h-screen">
        <span className="loading loading-spinner loading-md" />
        <p className="text-2xl font-bold">Loading...</p>
      </div>
    );
  }

  const visitWesbite = () => {
    if (!upvoted) {
      localStorage.setItem(`upvoted-${postid}`, "true");
      setUpvoted(true);
      incrementUpvotes(postid as string);
    }
  };

  return (
    <main className="flex flex-col gap-5 mb-10">
      <BackgroundBeams className="z-[-9]" />
      <div className="flex md:justify-around justify-between mt-4">
        <div className="flex flex-col">
          <h1 className="heading">{post.title}</h1>
        </div>
        <div className="px-4 flex items-center gap-4">
          <div className="tooltip tooltip-left" data-tip="Upvote This Program">
            <button
              onClick={handleUpvote}
              className={`btn flex items-center gap-1 ${
                upvoted ? "btn-primary" : "btn-outline"
              }`}
            >
              <Image
                src="/images/upvote.svg"
                width={20}
                height={20}
                alt="upvote"
                className={`${upvoted ? "invert" : ""}`}
              />
              {post.upvotes! + (upvoted ? 1 : 0)}
            </button>
          </div>
          <div className="flex justify-center my-4">
            <a
              onClick={visitWesbite}
              href={post.url}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Visit Website
            </a>
          </div>
        </div>
      </div>
      <h2 className="text-center text-[18px]">{post.summary}</h2>
      <img
        src={post.imageUrl}
        alt={post.title}
        className="mx-4 rounded-lg my-4 md:mx-auto md:w-[70%] w-[95%]"
      />
      <p className="md:px-52 px-16 text-lg font-medium">{post.description}</p>
    </main>
  );
};

export default AffiliateProgramPage;
