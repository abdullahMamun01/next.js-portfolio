import type { Metadata } from "next";

import "./globals.css";

import Sidebar from "@/components/Sidebar";
import {  Poppins } from "next/font/google";
import ThemeToggle from "./ThemeToggler";
import InitialLoadOverlay from "@/components/InitialLoadOverlay";
import { MobileNav } from "@/components/MobileNav";

export const metadata: Metadata = {
  title: "Abdullah Mamun",
  description: "Mern stack developer",
};
const inter = Poppins({ subsets: ["latin"], weight: "400" });

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <div className="max-w-full mx-auto px-8 sticky top-0 z-[999] bg-[#07223A] w-full">
            <Navbar />
          </div> */}
        <InitialLoadOverlay />
        <MobileNav/>
        <div className="flex md:flex-row flex-col min-h-screen ">
          <div className="max-sm:hidden md:w-[280px] fixed h-full">
            <Sidebar />
          </div>
          <main className=" md:flex-1 md:ml-[280px] md:p-8 ">
            <div className="">
              <ThemeToggle />
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
