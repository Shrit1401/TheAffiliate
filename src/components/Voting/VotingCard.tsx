import React from "react";

type VotingCardProp = {
  title: string;
  summary: string;
  price: string;
  onClick: () => void;
};

const VotingCard = (props: VotingCardProp) => {
  return (
    <div
      onClick={props.onClick}
      className="flex flex-col gap-2 border border-white/30 p-4 rounded-lg bg-white/10 text-white/90 hover:bg-[#ef4444] cursor-pointer *:
      transition-colors duration-300 ease-in-out hover:shadow-lg"
    >
      <h1 className="text-2xl">{props.title}</h1>
      <p>{props.summary}</p>
      <p className="badge badge-primary font-bold">${props.price} / lead</p>
    </div>
  );
};

export default VotingCard;
