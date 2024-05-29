import React from "react";
import { AnimatesPaymentList } from "./AnimatesPaymentList";
import TopAffiliate from "./SliderCard";
import Image from "next/image";
import Testimonial from "./Testimonial";

const Features = () => {
  return (
    <div className="flex flex-col ">
      <div className="hero min-h-[50vh] my-16 bg-transparent p-auto md:px-48">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <AnimatesPaymentList />
          <div>
            <h1 className="text-5xl font-bold">
              Earn Big with Affiliate Marketing!
            </h1>
            <p className="py-6">
              Discover how our users are earning substantial payouts through our
              affiliate program. Join the success stories and start earning
              effortlessly with minimal investment!
            </p>
            <a href="/affiliates" className="btn btn-primary">
              Get Started
            </a>
          </div>
        </div>
      </div>
      <TopAffiliate />

      <div className="hero min-h-[50vh] my-16 bg-transparent p-auto md:px-48">
        <div className="hero-content flex-col lg:flex-row">
          <Image
            src="/images/features/feature1.png"
            alt="feature1"
            width={500}
            height={500}
            className="rounded-lg object-cover"
          />
          <div>
            <h1 className="text-5xl font-bold">Submit with Ease!</h1>
            <p className="py-6">
              Joining our affiliate program is simple and straightforward.
              Submit your details, get your post on the site, and start getting
              traffic to your website in no time. It&apos;s that easy!
            </p>
            <a href="/submit" className="btn btn-primary">
              Join Now
            </a>
          </div>
        </div>
      </div>

      <div className="hero min-h-[50vh] my-16 bg-transparent p-auto md:px-48">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image
            src="/images/features/feature2.png"
            alt="feature2"
            width={500}
            height={500}
            className="rounded-lg object-cover"
          />
          <div>
            <h1 className="text-5xl font-bold">Top Affiliates Onboard!</h1>
            <p className="py-6">
              Join a community of high-earning affiliates who are reaping the
              benefits of our lucrative program. Learn from the best and
              maximize your earnings with our proven strategies.
            </p>
            <a href="/affiliates" className="btn btn-primary">
              Join Now
            </a>
          </div>
        </div>
      </div>

      <Testimonial />
    </div>
  );
};

export default Features;
