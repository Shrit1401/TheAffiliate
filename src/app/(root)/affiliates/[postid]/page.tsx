"use client";
import React from "react";
import { useParams } from "next/navigation";

import { BackgroundBeams } from "@/components/Global/BackgroundBeams";

import SingleData from "@/components/SinglePost/SingleData";

const AffiliateProgramPage = () => {
  return (
    <main className="flex flex-col gap-5 mb-10">
      <BackgroundBeams className="z-[-9]" />
      <SingleData postid={useParams().postid as string} />
    </main>
  );
};

export default AffiliateProgramPage;
