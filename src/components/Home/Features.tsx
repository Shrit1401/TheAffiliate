import React from "react";
import AnimatesPaymentList from "./AnimatesPaymentList";
import TopAffiliate from "./TopAffiliates";
import Image from "next/image";
import { Testimonial1, Testimonial2 } from "./Testimonial";
import feature1 from "../../../public/images/features/feature1.png";
import feature2 from "../../../public/images/features/feature2.png";

const Features = () => {
  return (
    <div className="flex flex-col">
      <section className="hero min-h-[50vh] my-16 bg-transparent p-auto md:px-48">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <AnimatesPaymentList />
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">
              Earn Big with Affiliate Marketing!
            </h1>
            <p className="py-6 md:text-[1.2rem]">
              Discover how our users are earning substantial payouts through our
              affiliate program. Join the success stories and start earning
              effortlessly with minimal investment!
            </p>
            <a href="/affiliates" className="btn btn-primary">
              Get Started
            </a>
          </div>
        </div>
      </section>
      <Testimonial1 />

      <section className="hero min-h-[50vh] my-8 bg-transparent p-auto md:px-48">
        <div className="flex items-center px-6 md:px2 flex-col justify-between gap-5 lg:flex-row">
          <Image
            src={feature2}
            alt="Vote Now"
            width={500}
            height={500}
            className="rounded-lg object-cover border-[3px] border-dotted border-white/5 "
          />
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">Vote Now</h1>
            <p className="py-6 md:text-[1.2rem]">
              Vote for your favorite affiliate programs and help them reach the
              top of our leaderboard. Your votes will help others discover the
              best programs and earn more through our platform.
            </p>
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
          </div>
        </div>
      </section>

      <section className="hero bg-transparent p-auto md:px-48">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image
            src={feature1}
            alt="Top Affiliates Onboard"
            width={500}
            height={500}
            className="rounded-lg object-cover border-[3px] border-dotted border-white/5"
          />
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">
              Top Affiliates Onboard!
            </h1>
            <p className="py-6 md:text-[1.2rem]">
              Join a community of high-earning affiliates who are reaping the
              benefits of our lucrative program. Learn from the best and
              maximize your earnings with our proven strategies.
            </p>
            <a href="/affiliates" className="btn btn-primary">
              Join Now
            </a>
          </div>
        </div>
      </section>

      <Testimonial2 />
    </div>
  );
};

export default Features;
