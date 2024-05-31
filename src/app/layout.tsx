import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";

import Navbar from "@/components/Global/Navbar";
import Footer from "@/components/Global/Footer";

const MetadataImage =
  "https://affiliate-jbb6xzkqc-shrit1401s-projects.vercel.app/images/card.png";

export const metadata: Metadata = {
  title: "TheAffiliate.io - Your Ultimate Affiliate Programs Directory",
  description:
    "Discover and compare the best affiliate programs on TheAffiliate.io. Upvote your favorites, find expert insights, and boost your affiliate marketing success today!",
  icons: {
    icon: "images/icon_dark.svg",
  },
  twitter: {
    card: "summary_large_image",
    site: "@theaffiliateio",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://theaffiliate.io",
    images: [
      {
        url: MetadataImage,
        width: 1500,
        height: 750,
        alt: "TheAffiliate.io",
      },
    ],
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
