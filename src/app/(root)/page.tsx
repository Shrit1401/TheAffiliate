"use client";

import Card from "@/components/Global/Card";

export default function Home() {
  return (
    <main>
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

      <div
        className="grid 
        grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
        gap-5 md:gap-7 lg:gap-10 
        p-5 md:p-7 lg:p-10
      "
      >
        <Card
          title="Affiliate.io"
          summary="The Best Affiliate Program in the Market"
          imageUrl="https://i.postimg.cc/pVYfYk97/image.png"
          upvotes={100}
          price="100"
          url="#"
        />
      </div>
    </main>
  );
}
