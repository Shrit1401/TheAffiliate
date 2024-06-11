"use client";
import React from "react";
import { BackgroundBeams } from "@/components/Global/BackgroundBeams";
import CTA from "@/components/Global/CTA";
import { HoverBorderGradientHome } from "@/components/Home/HoverBorderGradient";
import Features from "@/components/Home/Features";

export default function Home() {
  return (
    <main>
      <BackgroundBeams className="z-[-1]" />

      <div className="text-center mt-8 md:mt-0 md:h-[50vh] flex items-center flex-col justify-center gap-4 md:gap-5">
        <HoverBorderGradientHome />
        <h1 className="heading text">
          Discover Affiliates Directory,
          <br />
          <span className="md:text-6xl text-[2.5rem] relative dotted-underline">
            Boost Your Income Instantly
          </span>
        </h1>
        <h2 className="capitalize text-base-content text-lg">
          Find the best affiliate programs and networks to join and make money
          online.
        </h2>
        <div className="flex gap-5">
          <button
            onClick={() => {
              const modal = document.getElementById(
                "votingModal"
              ) as HTMLDialogElement;
              if (modal) {
                modal.showModal();
              }
            }}
            className="btn btn-primary"
          >
            Vote Now
          </button>
          <a href="/affiliates" className="btn btn-outline border-white">
            View All Affiliates
          </a>
        </div>
      </div>

      <Features />

      <CTA />
    </main>
  );
}
