import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";

import Navbar from "@/components/Global/Navbar";
import Footer from "@/components/Global/Footer";

import MetadataImage from "../../public/images/card.png";
import VotingPage from "@/components/Voting/VotingPage";
import Image from "next/image";

const alt = "About TheAffiliate.io";
const size = {
  width: "1500",
  height: "700",
};

const contentType = "image/png";

export const metadata: Metadata = {
  title: "TheAffiliate.io - Your Ultimate Affiliate Programs Directory",
  description:
    "Discover and compare the best affiliate programs on TheAffiliate.io Like your favorites, find expert insights, and boost your affiliate marketing success today!",
  icons: {
    icon: "images/icon_dark.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="z-10">
      <head>
        <meta property="og:url" content="https://www.theaffiliate.io/" />
        <meta property="og:image" content={MetadataImage.src} />
        <meta property="og:image:type" content={contentType} />
        <meta property="og:image:width" content={size.width} />
        <meta property="og:image:height" content={size.height} />
        <meta property="og:image:alt" content={alt} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="TheAffiliate.io - Your Ultimate Affiliate Program Directory"
        />
        <meta
          name="twitter:description"
          content="Discover and compare the best affiliate programs on TheAffiliate.io Like your favorites, find expert insights, and boost your affiliate marketing success today!"
        />
        <meta property="twitter:url" content="https://www.theaffiliate.io/" />
        <meta
          name="twitter:image"
          content="https://www.theaffiliate.io/images/card.png"
        />
        <meta name="twitter:image:alt" content={alt} />
        <link rel="canonical" href="https://theaffiliate.io/" />

        <link
          rel="icon"
          href="images/favicon.ico"
          type="image/x-icon"
          sizes="48x48"
        />
        <script
          defer
          data-domain="theaffiliate.io"
          src="https://plausible.io/js/script.tagged-events.js"
        ></script>
      </head>
      <body className="flex h-full flex-col">
        <div
          className="font-bold text-black fixed bottom-0 right-0 z-50
          px-[0.4rem] py-[.4rem] text-center rounded-t-lg shadow-lg flex items-center gap-2 justify-center duration-200 group"
        >
          <a
            href="https://www.producthunt.com/posts/the-affiliate?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-the&#0045;affiliate"
            target="_blank"
          >
            <img
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=463328&theme=dark"
              alt="The&#0032;Affiliate - Get&#0032;Our&#0032;Affiliates&#0032;Directory&#0044;&#0032;Boost&#0032;Your&#0032;Income&#0032;Instantly | Product Hunt"
              // style="width: 250px; height: 54px;"
              style={{ width: "250px", height: "54px" }}
              width="250"
              height="54"
            />
          </a>
        </div>

        <Toaster />
        <VotingPage />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
