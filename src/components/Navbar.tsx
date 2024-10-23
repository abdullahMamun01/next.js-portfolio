/* eslint-disable react/no-unescaped-entities */
"use client";
import Link from "next/link";


import { useState } from "react";

import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    {
      name: "Home",
      href: "#home",
    },
    {
      name: "About Me",
      href: "#about",
    },
    {
      name: "Projects",
      href: "#project",
    },
    {
      name: "Blogs",
      href: "#blog",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ];
  const [activeNav, setActiveNav] = useState<string>("Home");
  return (
    <header className="py-6 flex justify-between items-center relative max-w-[1300px] mx-auto">
      <div className="text-2xl font-bold">
        <span className="text-[#4d79ff] bg-white p-1 mr-1">A</span>BDULLAH
      </div>
      <nav
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row absolute md:relative top-full left-0 w-full md:w-auto bg-[#0c1424] p-4 md:bg-transparent z-50`}
      >
        {navItems.map((nav, i) => (
          <Link
            key={i}
            href={`/${nav.href}`}
            className={`${
              nav.name === activeNav
                ? "border-b-2 border-white py-2 md:py-0 md:mr-8 "
                : "hover:text-[#4d79ff] py-2 md:py-0 md:mr-8 "
            } uppercase `}

            onClick={() => setActiveNav(nav.name)}
          >
            {nav.name}
          </Link>
        ))}
      </nav>
      <div className="flex items-center">
        <button className="bg-[#4d79ff] px-6 py-2 rounded-full hover:bg-[#3a5ec2] transition-colors mr-4">
          LET'S TALK
        </button>
        <button className="md:hidden text-2xl" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
}
