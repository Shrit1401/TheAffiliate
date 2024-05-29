import React, { useEffect, useState } from "react";
import Card from "../Global/Card";
import Slider from "./Slider";
import { CardPrompts } from "../../../types";
import { getHotPosts } from "@/lib/posts.actions";
import { handleError } from "@/lib/utils";

const SliderCard = () => {
  const [cards, setCards] = useState<CardPrompts[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getHotPosts().catch((error) => handleError(error));
      setCards(posts as CardPrompts[]);
    };
    fetchPosts();
  }, [setCards]);
  return (
    <Slider
      Cards={cards.map((card) => (
        <Card
          key={card.title}
          title={card.title}
          imageUrl={card.imageUrl}
          upvotes={card.upvotes}
          summary={card.summary}
          price={card.price}
          url={card.url}
        />
      ))}
    />
  );
};

export default SliderCard;
