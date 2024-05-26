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
          <details>
            <summary className="font-bold md:text-lg">Categories</summary>
            <ul className="p-4 bg-black rounded-lg">
              {Categories.map((category) => (
                <li key={category}>
                  <a href={`#${category}`}>{category}</a>
                </li>
              ))}
            </ul>
          </details>
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
