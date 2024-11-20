import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

import Image from "next/image";
import { getUser } from "@/database/queries";
import { ArrowRight, Github } from "lucide-react";
import { BorderTrailTextarea } from "./animation/BorderTrailTextarea";
import { TextEffect } from "./animation/TextEffect";
import { AnimatedGroup } from "./animation/AnimatedGroup";


export default async function HeroSection() {
  const user = await getUser();
  const title = user.skillTitle.split(" ");

  return (
    <main className="py-16 flex flex-col md:flex-row items-center justify-between " id="hero">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <div className="bg-[#1c2c4c] inline-block px-4 py-2 rounded-full mb-4 uppercase">
          Hey , This is ABDULLAH MAMUN
        </div>
        <h1 className="text-5xl font-bold mb-4">
          {title?.slice(0, 1) as string}

          <br />
          <span className="text-[#0688FF] text-4xl">
            {title?.slice(1).join(" ") as string}
          </span>
        </h1>

        <TextEffect
          per="char"
          preset="fade"
          className="mb-8 text-gray-200 max-w-lg"
        >
          {user.bio}
        </TextEffect>

        <button className="bg-[#4d79ff] px-8 py-3 flex rounded-full hover:bg-[#3a5ec2] transition-colors mb-8">
          <a href={user.resumeUrl} target="_blank" className="flex">
          GET IN TOUCH CV <ArrowRight className="ml-2"/>
          </a>
        </button>
      
        <div className="flex space-x-4">
          <a
            href="https://www.facebook.com/abdullah.Mamun772/"
            target="_blank"
            className="bg-[#1877f2] p-2 rounded-full hover:opacity-80 transition-opacity"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href={user.socialLinks.githubUrl}
            target="_blank"
            className="bg-gray-600 p-2 rounded-full hover:opacity-80 transition-opacity"
          >
            <Github size={20} />
          </a>
          <a
            href={user.socialLinks.linkedinUrl}
            target="_blank"
            className="bg-[#0a66c2] p-2 rounded-full hover:opacity-80 transition-opacity"
          >
            <FaLinkedinIn size={20} />
          </a>
        </div>
      </div>
      <div className="md:w-1/2 relative bg-sky-900 mx-auto">
        <AnimatedGroup preset="slide">
          <BorderTrailTextarea>
            <Image
              width={500}
              height={1000}
              src={user.profileImageUrl}
              alt="abdullah"
              className="w-full h-auto object-contain "
            />
          </BorderTrailTextarea>
        </AnimatedGroup>
        {/* <div className="absolute top-0 left-0 w-full h-full">
          <div className="w-4 h-4 bg-white rounded-full absolute top-1/4 left-1/4"></div>
          <div className="w-8 h-8 bg-[#4d79ff] rounded-full absolute top-1/2 left-1/3 opacity-50"></div>
          <div className="w-6 h-6 bg-[#4d79ff] rounded-full absolute bottom-1/4 right-1/4 opacity-30"></div>
        </div> */}
      </div>
    </main>
  );
}
