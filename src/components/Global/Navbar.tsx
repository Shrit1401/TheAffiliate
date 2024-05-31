import Image from "next/image";
import { HiMenuAlt3 } from "react-icons/hi";
import Arrow from "../../../public/images/arrow.svg";
import Icon from "../../../public/images/icon_light.svg";

const Navbar = () => {
  return (
    <div className="navbar flex justify-around items-center md:px-16 py-8 z-[999] md:mt-2">
      <a className="gap-2 btn btn-ghost" href="/">
        <Image src={Icon} width={32} height={32} alt="Affiliate.io Logo" />
        <div className="indicator">
          <span className="indicator-item indicator-start badge badge-secondary">
            The
          </span>
          <h1 className="md:text-3xl text-xl text-white">Affiliate.io</h1>
        </div>
      </a>
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost md:hidden lg:hidden"
        >
          <HiMenuAlt3 size={32} />
        </div>
        <ul
          tabIndex={0}
          className="menu menu-md dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box gap-5 w-52"
        >
          <li>
            <a
              href="/affiliates"
              className="animate-pulse btn btn-ghost font-bold text-lg"
            >
              Affiliates Program
            </a>
          </li>
          <li>
            <a href="/submit" className="btn btn-primary">
              Submit Now
              <Image src={Arrow} className="pb-1" alt="arrow" />
            </a>
          </li>
        </ul>
      </div>
      <ul className="menu menu-horizontal gap-3 justify-center items-center px-1 hidden sm:flex">
        <li>
          <a href="/affiliates" className="animate-pulse font-bold md:text-lg">
            Affiliates Program
          </a>
        </li>
        <li>
          <a href="/submit" className="btn btn-primary">
            Submit Now
            <Image src={Arrow} className="pb-1" alt="arrow" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
