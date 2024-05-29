import Image from "next/image";
import React from "react";
import { Categories } from "../../../types";

const Navbar = () => {
  return (
    <div className="navbar flex justify-around items-center md:px-16 py-4">
      <a className="gap-2 btn btn-ghost" href="/">
        <Image
          src={"/images/icon_light.svg"}
          width={32}
          height={32}
          alt="Affiliate.io Logo"
        />
        <h1 className="md:text-3xl text-xl text-white">Affiliate.io</h1>
      </a>
      <ul className="menu menu-horizontal gap-3 justify-center items-center px-1">
        <li>
          <a href="/affiliates" className="animate-pulse font-bold md:text-lg">
            Affiliates Program
          </a>
        </li>
        <li>
          <a href="/submit" className="btn btn-primary">
            Submit Now
            <Image
              src="/images/arrow.svg"
              className="pb-1"
              alt="arrow"
              width={16}
              height={12}
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
