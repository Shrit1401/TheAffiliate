import React from "react";
import AnimatesPaymentList from "./AnimatesPaymentList";
import TopAffiliate from "./TopAffiliates";
import Image from "next/image";
import Testimonial from "./Testimonial";
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

      <TopAffiliate />

      <section className="hero min-h-[50vh] my-8 bg-transparent p-auto md:px-48">
        <div className="hero-content flex-col lg:flex-row">
          <Image
            src={feature1}
            alt="Submit with Ease"
            width={500}
            height={500}
            className="rounded-lg object-cover border-[3px] border-dotted border-white/5 "
          />
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">
              Submit with Ease!
            </h1>
            <p className="py-6 md:text-[1.2rem]">
              Joining our affiliate program is simple and straightforward.
              Submit your details, get your post on the site, and start getting
              traffic to your website in no time. It's that easy!
            </p>
            <a href="/submit" className="btn btn-primary">
              Join Now
            </a>
          </div>
        </div>
      </section>

      <section className="hero bg-transparent p-auto md:px-48">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image
            src={feature2}
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

      <Testimonial />
    </div>
  );
};

export default Features;
