"use client";
import {
  getPostById,
  decrementUpvotes,
  incrementUpvotes,
} from "@/lib/posts.actions";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { PostPrompts } from "../../../types";
import Image from "next/image";
import Upvote from "../../../public/images/upvote.svg";

const SingleData = ({ postid }: any) => {
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

  const visitWebsite = () => {
    if (!upvoted) {
      localStorage.setItem(`upvoted-${postid}`, "true");
      setUpvoted(true);
      incrementUpvotes(postid as string);
    }
  };
  return (
    <>
      <div className="flex md:justify-around md:flex-row items-center flex-col mt-4">
        <div className="flex flex-col">
          <h1 className="heading capitalize">{post.title}</h1>
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
                src={Upvote}
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
              onClick={visitWebsite}
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
      <div className="flex justify-center">
        <Image
          src={post.imageUrl}
          alt={post.title}
          width={500}
          height={300}
          className="rounded-lg w-[70%] h-auto md:h-[300px]"
          style={{ objectFit: "contain" }}
        />
      </div>
      <p className="md:px-52 px-16 text-lg font-medium">{post.description}</p>
    </>
  );
};

export default SingleData;
