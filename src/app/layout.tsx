import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";

import Navbar from "@/components/Global/Navbar";
import Footer from "@/components/Global/Footer";

import MetadataImage from "../../public/images/card.png";

const alt = "About TheAffiliate";
const size = {
  width: "1500",
  height: "700",
};

const contentType = "image/png";

export const metadata: Metadata = {
  title: "TheAffiliate - Your Ultimate Affiliate Programs Directory",
  description:
    "Discover and compare the best affiliate programs on TheAffiliate. Upvote your favorites, find expert insights, and boost your affiliate marketing success today!",
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
        <meta property="og:image" content={MetadataImage.src} />
        <meta property="og:image:type" content={contentType} />
        <meta property="og:image:width" content={size.width} />
        <meta property="og:image:height" content={size.height} />
        <meta property="og:image:alt" content={alt} />
        <meta name="twitter:card" content="summary_large_image" />

        <meta name="twitter:image" content={MetadataImage.src} />
        <meta name="twitter:image:type" content={contentType} />
        <meta name="twitter:image:width" content={size.width} />
        <meta name="twitter:image:height" content={size.height} />
        <meta property="twitter:image:alt" content={alt} />
        <link
          rel="icon"
          href="images/favicon.ico"
          type="image/x-icon"
          sizes="48x48"
        />
      </head>
      <body className="flex h-full flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
