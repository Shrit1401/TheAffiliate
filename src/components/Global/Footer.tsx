import Image from "next/image";
import React from "react";
import { ImGithub, ImTwitter } from "react-icons/im";
import Icon from "../../../public//images/icon_light.svg";
const Footer = () => {
  return (
    <footer className="footer  p-10 bg-base-200 text-base-content">
      <aside>
        <Image src={Icon} alt="Affiliate" height={40} width={40} />
        <p>
          TheAffiliate.io
          <br />
          &copy; {new Date().getFullYear()} All Rights Reserved Hopefully
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Pages</h6>
        <a href="/home" className="link link-hover">
          Home
        </a>
        <a href="/affiliates" className="link link-hover">
          Affiliates
        </a>
        <a href="/submit" className="link link-hover">
          Submit
        </a>
        <a href="/terms" className="link link-hover">
          Terms and Condition
        </a>
      </nav>
      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-flow-col gap-4">
          <a href="" className="btn btn-square btn-ghost">
            <ImGithub size={32} />
          </a>
          <a href="" className="btn btn-square btn-ghost">
            <ImTwitter size={32} />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
