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
          Discover Top Affiliates,
          <br />
          <span className="relative inline-block">
            <span className="absolute bg-neutral-content inset-0 md:-inset-1 -rotate-1" />
            <span className="relative text-neutral md:text-6xl text-[2.5rem]">
              Boost Your Income Instantly
            </span>
          </span>
        </h1>
        <h2 className="capitalize text-base-content">
          We Help Brands Meet You, and You to Meet Brands
        </h2>
        <div className="flex gap-5">
          <a href="/affiliates" className="btn btn-primary">
            Get Started
          </a>
          <a href="/submit" className="btn btn-outline border-white">
            Submit Your Business
          </a>
        </div>
      </div>

      <Features />

      <CTA />
    </main>
  );
}
