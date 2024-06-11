import Link from "next/link";
import React from "react";

type Program = {
  name: string;
  commissionRate: string;
  features: string;
  price: string;
};

const ProgramList: React.FC<{ programs: Program[] }> = ({ programs }) => (
  <div className="container mx-auto p-4">
    {programs.map((program, index) => (
      <div
        key={index}
        className="border border-white/50 rounded-lg p-4 mb-4 shadow-lg "
      >
        <h2 className="text-xl font-semibold text-primary mb-2">
          {program.name}
        </h2>
        <p className="text-base-content mb-1">
          <span className="font-semibold">Commission Rate:</span>{" "}
          {program.commissionRate}
        </p>
        <p className="text-base-content mb-1">
          <span className="font-semibold">Features:</span> {program.features}
        </p>
        <p className="text-base-content mb-1">
          <span className="font-semibold">Price per Lead/Sale:</span>{" "}
          {program.price}
        </p>
        <Link href="/affiliates" className="btn btn-primary mt-3">
          Learn More
        </Link>
      </div>
    ))}
  </div>
);

export default ProgramList;
