import React from "react";
import Arrow from "../../../public/images/arrow.svg";
import Image from "next/image";

const CTA = () => {
  return (
    <div className="hero bg-base-300 py-8 rounded-lg">
      <div className="text-center flex-col lg:flex-row-reverse">
        <div>
          <h1 className="relative heading">
            Product Hunt 🚀
            <div className=" badge badge-primary animate-pulse absolute top-1 right-1 transform -translate-x-1/2 -translate-y-1/2">
              Upvote
            </div>
          </h1>
          <p className="py-6">
            If you like what we are doing, please upvote us on Product Hunt.
          </p>
          <a
            href="https://www.producthunt.com/products/the-affiliate"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary plausible-event-name=SeoLevelUp+Button+Clicked"
          >
            Get Started
            <Image src={Arrow} alt="Arrow" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CTA;
