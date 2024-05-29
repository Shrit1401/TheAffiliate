import React from "react";

const CTA = () => {
  return (
    <div className="hero w-[95%] md:w-[90%] mt-8 border border-white/80 py-8 rounded-lg m-auto">
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
            className="btn btn-primary"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default CTA;
