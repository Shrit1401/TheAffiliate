"use client";
import React, { useEffect, useState } from "react";
import VotingCard from "./VotingCard";
import { chooseTwoRandomPosts, incrementLikes } from "@/lib/posts.actions";
import { handleError } from "@/lib/utils";
import { VotingCardProps } from "../../../types";
import toast from "react-hot-toast";

export const setUpLocal = () => {
  if (typeof window === "undefined") return null;
  const votesLeft = window.localStorage.getItem("votesLeft");
  if (!votesLeft) {
    window.localStorage.setItem("votesLeft", "20");
  }

  const today = new Date();
  const todayStr = today.toISOString().slice(0, 10);
  const lastDate = window.localStorage.getItem("lastDate");

  if (lastDate) {
    const last = new Date(lastDate);
    const lastStr = last.toISOString().slice(0, 10);
    if (todayStr !== lastStr) {
      window.localStorage.setItem("votesLeft", "20");
    }
  }

  window.localStorage.setItem("lastDate", todayStr);
  return window.localStorage.getItem("votesLeft");
};

const VotingPage = () => {
  const [loading, setLoading] = useState(false);
  const [votingData, setVotingData] = useState<VotingCardProps[]>([]);
  const [votesLeft, setVotesLeft] = useState<string | null>(null);

  useEffect(() => {
    setVotesLeft(setUpLocal());
    fetchRandom();
  }, []);

  const fetchRandom = async () => {
    setLoading(true);
    const posts = await chooseTwoRandomPosts().catch((error) =>
      handleError(error)
    );
    setVotingData(posts as VotingCardProps[]);
    setLoading(false);
  };

  const handleVote = async (id: string) => {
    if (Number(votesLeft) <= 0) {
      toast.error("You have no votes left for today", {
        style: {
          background: "#333",
          color: "#fff",
        },
      });
      return;
    }
    fetchRandom();
    const votes = parseInt(votesLeft!) - 1;
    setVotesLeft(votes.toString());
    incrementLikes(id);
    window.localStorage.setItem("votesLeft", votes.toString());
    toast.success(`Voted successfully! ${votes} left`, {
      style: {
        background: "#333",
        color: "#fff",
      },
    });
  };

  return (
    <dialog id="votingModal" className="modal z-[-1]">
      <div className="modal-box">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h2 className="font-bold text-2xl text-white">
          Vote For Best Affiliates
        </h2>
        <h3>{votesLeft} left for Today</h3>

        {!loading && votingData?.length === 2 ? (
          <div className="flex flex-col w-full border-opacity-50 my-8">
            <VotingCard
              onClick={() => handleVote(votingData[0].id!)}
              title={votingData[0].title}
              summary={votingData[0].summary}
              link={votingData[0].link}
              price={votingData[0].price}
            />
            <div className="divider">OR</div>
            <VotingCard
              onClick={() => handleVote(votingData[1].id!)}
              title={votingData[1].title}
              link={votingData[1].link}
              summary={votingData[1].summary}
              price={votingData[1].price}
            />
          </div>
        ) : (
          <div className="flex flex-col w-full border-opacity-50 my-8 items-center">
            <span className="loading loading-spinner loading-lg" />
          </div>
        )}
      </div>
    </dialog>
  );
};

export default VotingPage;
