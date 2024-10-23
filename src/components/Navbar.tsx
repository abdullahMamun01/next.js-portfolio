/* eslint-disable react/no-unescaped-entities */
"use client";
import Link from "next/link";

import { useEffect, useState } from "react";

import { FaBars, FaTimes } from "react-icons/fa";


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    console.log(window.location.pathname)
  },[])

  



  return (
    <header className="py-6 flex justify-between items-center relative max-w-[1300px] mx-auto">
      <div className="text-2xl font-bold">
        <span className="text-[#4d79ff] bg-white p-1 mr-1">A</span>BDULLAH
      </div>
      <nav
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row absolute md:relative top-full left-0 w-full md:w-auto bg-[#0c1424] md:bg-transparent z-50`}
      >
        <Link href="/#hero" className={`${true ? 'border-b-2 border-white py-2 md:py-0 md:mr-8' : 'hover:text-[#4d79ff] py-2 md:py-0 md:mr-8'} `}>
          HOME
        </Link>
        <Link href="/#hero" className={`${true ? 'border-b-2 border-white py-2 md:py-0 md:mr-8' : 'hover:text-[#4d79ff] py-2 md:py-0 md:mr-8'} `}>
          ABOUT ME
        </Link>
        <Link href="#project" className="hover:text-[#4d79ff] py-2 md:py-0 md:mr-8">
          PROJECTS
        </Link>

        <Link href="/#blog" className="hover:text-[#4d79ff] py-2 md:py-0 md:mr-8">
          BLOGS
        </Link>
        <Link href="/#contact" className="hover:text-[#4d79ff] py-2 md:py-0 md:mr-8">
          CONTACT
        </Link>
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
