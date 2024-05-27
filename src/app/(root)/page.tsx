"use client";

import { BackgroundBeams } from "@/components/Global/BackgroundBeams";
import Card from "@/components/Global/Card";
import AffiliatesCards from "@/components/Home/AffiliatesCards";
import Slider from "@/components/Home/Slider";
import { FaFilter } from "react-icons/fa";

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
          <a href="#" className="btn btn-primary">
            Get Started
          </a>
          <a href="#" className="btn btn-outline border-white">
            Submit Your Buisness
          </a>
        </div>
      </div>
      <div className="mb-8">
        <div className="text-center text-4xl font-bold mb-4">
          Hot Affiliates
        </div>
        <Slider
          Cards={[
            <Card
              title="Affiliate.io"
              summary="The Best Affiliate Program in the Market"
              imageUrl="https://i.postimg.cc/pVYfYk97/image.png"
              upvotes={100}
              price="100"
              url="#"
            />,
            <Card
              title="Affiliate.io"
              summary="The Best Affiliate Program in the Market"
              imageUrl="https://i.postimg.cc/pVYfYk97/image.png"
              upvotes={100}
              price="100"
              url="#"
            />,
            <Card
              title="Affiliate.io"
              summary="The Best Affiliate Program in the Market"
              imageUrl="https://i.postimg.cc/pVYfYk97/image.png"
              upvotes={100}
              price="100"
              url="#"
            />,
            <Card
              title="Affiliate.io"
              summary="The Best Affiliate Program in the Market"
              imageUrl="https://i.postimg.cc/pVYfYk97/image.png"
              upvotes={100}
              price="100"
              url="#"
            />,
            <Card
              title="Affiliate.io"
              summary="The Best Affiliate Program in the Market"
              imageUrl="https://i.postimg.cc/pVYfYk97/image.png"
              upvotes={100}
              price="100"
              url="#"
            />,
          ]}
        />
      </div>
      <AffiliatesCards />
    </main>
  );
}
