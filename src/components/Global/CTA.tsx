import React from "react";
import Arrow from "../../../public/images/arrow.svg";
import Image from "next/image";

const CTA = () => {
  return (
    <div className="hero bg-base-300 py-8 rounded-lg">
      <div className="text-center flex-col lg:flex-row-reverse">
        <div>
          <h1 className="heading">SeoLevelup 🚀</h1>
          <p className="py-6">
            🚀 Galactic Designs, Stellar Rankings: Your Digital Universe Awaits.
          </p>
          <a
            href="https://seolevelup.com/"
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
