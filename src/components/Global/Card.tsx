import React, { useState, useEffect } from "react";
import Image from "next/image";
import { CardPrompts } from "../../../types";
import toast from "react-hot-toast";
import { decrementUpvotes, incrementUpvotes } from "@/lib/posts.actions";
import Arrow from "../../../public/images/arrow.svg";
import Upvote from "../../../public/images/upvote.svg";

const Card = ({
  id,
  imageUrl,
  title,
  summary,
  url,
  price,
  upvotes,
}: CardPrompts) => {
  const [upvoted, setUpvoted] = useState(false);

  useEffect(() => {
    const storedUpvote = localStorage.getItem(`upvoted-${id}`);
    if (storedUpvote) {
      setUpvoted(true);
    }
  }, [id]);

  const handleUpvote = () => {
    if (upvoted) {
      localStorage.removeItem(`upvoted-${id}`);
      setUpvoted(false);
      decrementUpvotes(id!);
      toast("Upvote removed", {
        icon: "😭",
        style: {
          background: "#333",
          color: "#fff",
        },
      });
    } else {
      localStorage.setItem(`upvoted-${id}`, "true");
      setUpvoted(true);
      incrementUpvotes(id!);
      toast.success("Upvoted successfully!", {
        style: {
          background: "#333",
          color: "#fff",
        },
      });
    }
  };

  const handleSampleUrl = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    if (url === "nr") {
      toast.error("This is a preview card, you can't visit it😂", {
        style: {
          background: "#333",
          color: "#fff",
        },
      });
      e.preventDefault();
    }
  };

  return (
    <div className="bg-[#1A1A1A] flex flex-col gap-6 rounded-md pb-4 overflow-hidden">
      <div className="relative w-full h-60">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-md object-center"
        />
      </div>
      <div className="px-4 flex justify-between items-center">
        <div className="flex flex-col w-3/4 max-w-full">
          <h1 className="text-2xl text-white truncate">{title}</h1>
          <p className="text-base-content font-medium truncate">{summary}</p>
        </div>
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
            {upvotes + (upvoted ? 1 : 0)}
          </button>
        </div>
      </div>
      <div className="px-4 flex gap-5">
        <button className="btn cursor-not-allowed">${price} / lead</button>
        <a
          onClick={handleSampleUrl}
          href={url === "nr" ? "" : `/affiliates/${id}`}
          className="btn btn-primary flex items-center gap-2"
        >
          Learn More
          <Image src={Arrow} alt="arrow" />
        </a>
      </div>
    </div>
  );
};

export default Card;
