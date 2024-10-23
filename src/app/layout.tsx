import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
//bg-gradient-to-b from-[#071A2F] to-[#07223A]
import Navbar from "../components/Navbar";
import { dbConnect } from "@/services/dbConnect";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Abdullah Mamun",
  description: "Mern stack developer",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) 
{
await dbConnect()

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="bg-gradient-to-b  from-[#07223A] to-[#071A2F] min-h-screen text-white font-sans ">
          <div className="max-w-full mx-auto px-8 sticky top-0 z-[999] bg-[#07223A] w-full">
            <Navbar />
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
