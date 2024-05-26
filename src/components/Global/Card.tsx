import React from "react";
import Image from "next/image";
import { CardPrompts } from "../../../types";

const Card = (card: CardPrompts) => {
  return (
    <div className="bg-[#1A1A1A] flex flex-col gap-6 rounded-md pb-4">
      <img src={card.imageUrl} className="rounded-t-md bg-cover" />
      <div className="px-4 flex justify-between items-center">
        <div>
          <h1 className="text-2xl">{card.title}</h1>
          <p className="text-base-content font-medium text-ellipsis">
            {card.summary}
          </p>
        </div>
        <div className="tooltip" data-tip="Upvote This Program">
          {/* TODO: check the issue with hover and image */}
          <button className="border-2 btn btn-outline upvote">
            <Image
              src="/images/upvote.svg"
              width={20}
              height={20}
              alt="upvote"
              className="upvote-img"
            />
            {card.upvotes}
          </button>
        </div>
      </div>

      <div className="px-4 flex gap-5">
        <button className="btn hover:disabled cursor-not-allowed skeleton">
          ${card.price} / lead
        </button>
        <a
          href={card.url}
          target="_blank"
          rel="noreferrer noopener"
          className="btn btn-primary"
        >
          Learn More
          <Image src="/images/arrow.svg" width={20} height={20} alt="arrow" />
        </a>
      </div>
    </div>
  );
};

export default Card;
