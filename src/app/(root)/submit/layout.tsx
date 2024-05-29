import { Toaster } from "react-hot-toast";

import Navbar from "@/components/Global/Navbar";
import Footer from "@/components/Global/Footer";

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
      <body>
        <Navbar />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
