import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/NavBar";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DocuChat",
  description: "Chat with your documents in seconds",
  icons: "/DocuchatIcon.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" className="light">
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {/* <Providers> */}
        <body
          className={cn(
            "min-h-screen font-sans antialiased grainy",
            inter.className
          )}
        >
          {/* <Toaster /> */}
          <Navbar />
          {children}
        </body>
        {/* </Providers> */}
      </html>
    </>
  );
}
