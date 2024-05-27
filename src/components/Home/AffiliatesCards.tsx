import React from "react";
import { FaFilter } from "react-icons/fa";
import Card from "../Global/Card";

const AffiliatesCards = () => {
  return (
    <div
      className="grid 
  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
  gap-5 md:gap-7 lg:gap-10 
  p-5 md:p-7 lg:p-10
"
    >
      <div className="">
        <div className="flex w-full justify-between">
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
            <input type="text" className="grow" placeholder="Search" />
          </label>

          <div className="dropdown dropdown-hover dropdown-bottom dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-primary m-1">
              <FaFilter className="invert" />
              Filter Categories
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
        </div>
        <Card
          title="Affiliate.io"
          summary="The Best Affiliate Program in the Market"
          imageUrl="https://i.postimg.cc/pVYfYk97/image.png"
          upvotes={100}
          price="100"
          url="#"
        />
      </div>
    </div>
  );
};

export default AffiliatesCards;
