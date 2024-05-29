"use client";
import React from "react";
import { HoverBorderGradient } from "../Global/hover-border-gradient";
import Image from "next/image";
import NumberTicker from "../magicui/number-ticker";

export function HoverBorderGradientHome() {
  return (
    <HoverBorderGradient className="flex items-center justify-center space-x-2 bg-base-100  text-primary">
      <Image src="/images/icon_light.svg" alt="logo" width={28} height={28} />
      <NumberTicker value={50} />+
      <span className="text-lg font-medium">Affiliates</span>
    </HoverBorderGradient>
  );
}
