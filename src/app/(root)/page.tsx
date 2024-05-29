"use client";

import { BackgroundBeams } from "@/components/Global/BackgroundBeams";
import CTA from "@/components/Global/CTA";
import Card from "@/components/Global/Card";
import AffiliatesCards from "@/components/Home/AffiliatesCards";
import SliderCard from "@/components/Home/SliderCard";

export default function Home() {
  return (
    <main>
      <BackgroundBeams className="z-[-1]" />

      <div className="text-center h-[50vh] flex items-center flex-col justify-center gap-4 md:gap-5">
        <h1 className="heading text">
          Discover Top Affiliates,
          <br /> Boost Your Income Instantly
        </h1>
        <h2 className="capitalize text-base-content">
          We Help Brands Meet You, and You to Meet Brands
        </h2>
        <div className="flex gap-5">
          <a href="/affiliates" className="btn btn-primary">
            Get Started
          </a>
          <a href="/submit" className="btn btn-outline border-white">
            Submit Your Buisness
          </a>
        </div>
      </div>
      <div className="mb-8">
        <div className="text-center text-4xl font-bold mb-4">
          Hot Affiliates
        </div>
        {/* TODO: change homepage and new good looking stuff */}
        <SliderCard />
      </div>
      <AffiliatesCards />
      <CTA />
    </main>
  );
}
