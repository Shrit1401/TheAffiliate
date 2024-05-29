import React, { useState, useEffect } from "react";
import Image from "next/image";
import { CardPrompts } from "../../../types";
import toast from "react-hot-toast";
import { decrementUpvotes, incrementUpvotes } from "@/lib/posts.actions";

const Card = (card: CardPrompts) => {
  const [upvoted, setUpvoted] = useState(false);

  useEffect(() => {
    const storedUpvote = localStorage.getItem(`upvoted-${card.id}`);
    if (storedUpvote) {
      setUpvoted(true);
    }
  }, [card.id]);

  const handleUpvote = () => {
    if (upvoted) {
      localStorage.removeItem(`upvoted-${card.id}`);
      setUpvoted(false);
      decrementUpvotes(card.id!);
      toast("Upvote removed", {
        icon: "😭",
        style: {
          background: "#333",
          color: "#fff",
        },
      });
    } else {
      localStorage.setItem(`upvoted-${card.id}`, "true");
      setUpvoted(true);
      incrementUpvotes(card.id!);
      toast.success("Upvoted successfully!", {
        style: {
          background: "#333",
          color: "#fff",
        },
      });
    }
  };

  const sampleUrl = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (card.url === "nr") {
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
      <img
        src={card.imageUrl}
        className="rounded-t-md bg-cover h-[15rem] object-cover w-full"
        alt={card.title}
      />
      <div className="px-4 flex justify-between items-center">
        <div className="flex flex-col w-3/4 max-w-full">
          <h1 className="text-2xl text-white truncate">{card.title}</h1>
          <p className="text-base-content font-medium truncate">
            {card.summary}
          </p>
        </div>
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
            {card.upvotes + (upvoted ? 1 : 0)}
          </button>
        </div>
      </div>
      <div className="px-4 flex gap-5">
        <button className="btn cursor-not-allowed">${card.price} / lead</button>
        <a
          onClick={sampleUrl}
          href={card.url === "nr" ? "" : `/affiliates/${card.id}`}
          className="btn btn-primary flex items-center gap-2"
        >
          Learn More
          <Image src="/images/arrow.svg" width={20} height={20} alt="arrow" />
        </a>
      </div>
    </div>
  );
};

export default Card;
