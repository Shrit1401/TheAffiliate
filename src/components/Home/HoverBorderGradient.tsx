"use client";
import React from "react";
import { HoverBorderGradient } from "../Global/hover-border-gradient";
import Image from "next/image";
import NumberTicker from "../magicui/number-ticker";
import Icon from "../../../public/images/icon_light.svg";

export function HoverBorderGradientHome() {
  return (
    <HoverBorderGradient className="flex items-center justify-center space-x-2 bg-base-100 text-primary">
      <Image src={Icon} alt="logo" width={18} height={18} />
      <NumberTicker value={50} />+
      <span className="text-sm font-medium">Affiliates</span>
    </HoverBorderGradient>
  );
}
