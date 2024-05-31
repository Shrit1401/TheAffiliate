import CTA from "@/components/Global/CTA";
import AffiliatesCards from "@/components/Home/AffiliatesCards";
import React from "react";

const AffiliatesPage = () => {
  return (
    <main className="flex gap-8 flex-col">
      <div className="mx-auto text-center gap-2 flex flex-col">
        <h1 className="heading text-4xl font-bold">Affiliates</h1>
        <h2 className="text-lg">
          Check Out Our Affiliates, Make Some Money 🤑
        </h2>
      </div>
      <AffiliatesCards />
      <CTA />
    </main>
  );
};

export default AffiliatesPage;
