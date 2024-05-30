import Image from "next/image";
import React from "react";
import { ImGithub, ImTwitter } from "react-icons/im";

const Footer = () => {
  return (
    <footer className="footer items-center p-4 mt-4 bg-[#1e1e1e] text-neutral-content">
      <aside className="items-center grid-flow-col">
        <Image
          src="/images/icon_light.svg"
          alt="logo"
          width={40}
          height={40}
          className="
            w-10 h-10
            rounded-full
            shadow-lg
            bg-neutral-content
            bg-opacity-75
        "
        />
        <p>
          Affiliate.io, Copyright © {new Date().getFullYear()} - All right
          reserved hopefully,{" "}
          <a
            href="https://seolevelup.com/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-link px-2"
          >
            Powered by SEOlevelUp
          </a>
        </p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a
          href="https://x.com/shrit1401"
          className="btn btn-ghost btn-circle"
          aria-label="Visit our Twitter"
          target="_blank"
          rel="noreferrer"
        >
          <ImTwitter size={32} />
        </a>
        <a
          href="https://github.com/shrit1401"
          className="btn btn-ghost btn-circle"
          aria-label="Visit our Twitter"
          target="_blank"
          rel="noreferrer"
        >
          <ImGithub size={32} />
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
