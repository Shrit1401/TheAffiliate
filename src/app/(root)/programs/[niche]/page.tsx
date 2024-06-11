import ProgramList from "@/components/Programs/ProgramList";
import React from "react";
import { pSEOPrograms } from "../../../../../data";

export type Program = {
  name: string;
  commissionRate: string;
  features: string;
  price: string;
};

async function fetchPrograms(niche: string): Promise<Program[]> {
  return pSEOPrograms[niche] || [];
}

const NichePage: React.FC<{ params: { niche: string } }> = async ({
  params,
}) => {
  const { niche } = params;

  const programs = await fetchPrograms(niche);

  return (
    <div>
      <main className="flex flex-col gap-5">
        <h1 className="px-4 capitalize">
          Top Affiliate Programs for{" "}
          {niche
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")}
        </h1>
        <ProgramList programs={programs} />
      </main>
    </div>
  );
};

export default NichePage;
