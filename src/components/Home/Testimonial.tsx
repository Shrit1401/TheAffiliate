import React from "react";

export const Testimonial1 = () => {
  return (
    <section className="relative isolate overflow-hidden px-6 py-8 sm:py-12 md:px-8 bg-base-100">
      <div className="mx-auto max-w-2xl md:max-w-4xl">
        <figure>
          <blockquote className="text-center font-semibold text-[1.5rem] md:text-3xl leading-9 md:leading-10">
            &quot;This website is a treasure trove of information! It&apos;s
            like having a personal encyclopedia at your fingertips. I highly
            recommend it to anyone looking to expand their knowledge or stay
            informed.&quot;
          </blockquote>
          <figcaption className="mt-4">
            <div className="mt-4 flex items-center justify-center space-x-3">
              <div className="font-medium text-white">Ruru</div>
              <svg
                viewBox="0 0 2 2"
                width={3}
                height={3}
                aria-hidden="true"
                className="fill-white/50"
              >
                <circle cx={1} cy={1} r={1} />
              </svg>
              <div className="text-white/50 font-bold">
                &quot;Full Stack Web Dev&quot;
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export const Testimonial2 = () => {
  return (
    <section className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:px-8 bg-base-100">
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <figure>
          <blockquote className="text-center font-semibold text-[1.5rem]  md:text-3xl leading-9 md:leading-10">
            &quot;Become a part of the Affiliate.io community today and take
            your marketing to the next level. &quot;
          </blockquote>
          <figcaption className="mt-4">
            <div className="mt-4 flex items-center justify-center space-x-3">
              <div className="font-medium text-white">Mohamed Mahmoud</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};
