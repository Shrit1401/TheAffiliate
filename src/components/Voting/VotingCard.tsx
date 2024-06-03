import Image from "next/image";
import React from "react";
import Arrow from "../../../public/images/arrow.svg";

type VotingCardProp = {
  title: string;
  summary: string;
  price: string;
  link: string;
  onClick: () => void;
};

const VotingCard = (props: VotingCardProp) => {
  return (
    <div
      onClick={props.onClick}
      className="
      flex items-center gap-2 border justify-between border-white/30 p-4 rounded-lg bg-white/10 text-white/90 hover:bg-[#ef4444] cursor-pointer *: transition-colors duration-300 ease-in-out hover:shadow-lg"
    >
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl">{props.title}</h1>
        <p>{props.summary}</p>
        <p className="badge badge-primary font-bold">${props.price} / lead</p>
      </div>

      <a target="_blank" className="btn btn-primary" href={props.link}>
        Visit
        <Image src={Arrow} className="pb-1" alt="arrow" />
      </a>
    </div>
  );
};

export default VotingCard;
