"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Briefcase,
  FileText,
  FolderOpen,
  Github,
  Home,
  Linkedin,
  MessageSquare,
  User,
} from "lucide-react";
import Link from "next/link";

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const navItemVariants = {
  initial: { x: -20, opacity: 0 },
  animate: { x: 0, opacity: 1 },
};

export default function Sidebar() {
  return (
    <motion.aside
      initial={{ x: -280 }}
      animate={{ x: 0 }}
      transition={{ type: "spring", damping: 20 }}
      className="w-full bg-white  dark:bg-gray-900  p-8 flex flex-col h-full border-r border-r-gray-700"
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className=" mb-8"
      >
        <div className="w-32 h-32  mb-4 relative">
          <Image
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&q=80"
            alt="Profile"
            width={128}
            height={128}
            className="rounded-full object-cover"
          />
        </div>
        <h2 className="text-xl font-semibold tracking-wider">
          <span className="text-[#4d79ff] bg-white p-1 mr-1">A</span>BDULLAH
        </h2>
      </motion.div>

      <motion.nav
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="flex-1 "
      >
        <ul className="space-y-1 devide-gray-800 ">
          {[
            {
              href: "/",
              icon: <Home className="w-5 h-5 mr-4" />,
              text: "HOME",
            },
            {
              href: "/about",
              icon: <User className="w-5 h-5 mr-4" />,
              text: "ABOUT ME",
            },
            {
              href: "/services",
              icon: <Briefcase className="w-5 h-5 mr-4" />,
              text: "SERVICES",
            },
            {
              href: "/portfolio",
              icon: <FolderOpen className="w-5 h-5 mr-4" />,
              text: "PORTFOLIO",
            },
            {
              href: "/blogs",
              icon: <FileText className="w-5 h-5 mr-4" />,
              text: "BLOGS",
            },
            {
              href: "/contact",
              icon: <MessageSquare className="w-5 h-5 mr-4" />,
              text: "CONTACT ME",
            },
          ].map((item, i) => (
            <motion.li
              key={item.href}
              variants={navItemVariants}
              className={`${
                i >= 0 && i < 5 && "border-b border-gray-700"
              } py-2`}
            >
              <Link
                href={item.href}
                className="flex items-center dark:text-gray-100 text-gray-700 hover:text-green-500 transition-colors"
              >
                {item.icon}
                <span>{item.text}</span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.nav>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-auto"
      >
        <div className="flex justify-center space-x-4">
          {/* Social icons remain the same */}
        </div>
      </motion.div>

        <div className="flex justify-center space-x-4 mt-4">
          <a
            href="https://www.linkedin.com/in/abdullah-mamun-454a501a/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors text-green-500"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/abdullahmamun"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors text-green-500"
          >
            <Github className="w-6 h-6" />
          </a>
        </div>
    </motion.aside>
  );
}
