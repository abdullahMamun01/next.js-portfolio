"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn, slideIn, staggerContainer, scaleIn } from "@/lib/animations";

import RedoAnimText from "@/components/animation/RedoAnimText";
import CursorBlinker from "@/components/animation/CursorBlinker";
import { Download } from "lucide-react";

interface IProps {
  name: string;
  tagline: string[];
  description: string;
  heroImage: string;
  resumeUrl: string;
}
export default function HeroSection2({
  name,
  tagline,
  description,
  heroImage,
  resumeUrl,
}: IProps) {
  return (
    <section className="py-16  md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8">
        <motion.div
          className="col-span-1 mt-10 md:mt-0 flex flex-col justify-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.p className="text-xl md:text-2xl mb-4 " variants={fadeIn}>
            Hello, I am
          </motion.p>
          <motion.h1
            className="text-3xl md:text-6xl font-bold mb-4"
            variants={slideIn("left")}
          >
            {name}
          </motion.h1>
          <motion.p
            className="text-lg font-bold md:text-2xl text-gray-100 mb-6"
            variants={fadeIn}
          >
            I Am Passionate {} <RedoAnimText texts={tagline} />{" "}
            <CursorBlinker />
          </motion.p>
          <motion.p
            className="text-md md:text-md text-gray-200 lg:text-lg mb-8 max-w-2xl"
            variants={fadeIn}
          >
            {description}
          </motion.p>
          <button className="inline-block mr-auto">
            <motion.a
              href={resumeUrl}
              target="_blank"
              className="inline-flex items-center text-sm md:text-lg px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              variants={fadeIn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </motion.a>
          </button>
        </motion.div>

        <motion.div
          className="relative order-first sm:order-none col-span-1 mx-auto mb-4 md:mb-0 w-3/4 md:w-full h-full flex justify-center items-center"
          initial="hidden"
          animate="visible"
          variants={scaleIn}
        >
          <motion.div
            className="absolute inset-0 bg-green-500 opacity-20 rounded-full"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <Image
            src={heroImage}
            alt="Profile"
            width={500}
            height={500}
            priority
            className="rounded-full object-contain z-[999]"
          />
        </motion.div>
      </div>
    </section>
  );
}
