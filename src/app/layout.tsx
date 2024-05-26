import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";

import Navbar from "@/components/Global/Navbar";

export const metadata: Metadata = {
  title: "Affiliate.io",
  // TODO: Add a description
  description: "Generated by create next app",
  icons: {
    icon: "images/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="images/favicon.ico"
          type="image/x-icon"
          sizes="48x48"
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
