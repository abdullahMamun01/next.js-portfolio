/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import SkillsSection from "../components/SkillSection";
import PortfolioSection from "../components/PortfolioSection";
import AboutSection from "../components/AboutSection";
import WorkingExperiance from "../components/WorkingExperiance";
// import BLogSection from "../components/BlogSection";
import ContactSection from "../components/ContactSection";
import { InViewBasic } from "@/components/animation/InviewBasic";
import HeroSection2 from "./HeroSection2";
import { client, imageUrlFor } from "@/sanity/client";

export default async function HomePage() {
  const aboutQuery = '*[_type == "about"]{_id , name, tagline,description, heroImage, profileImage,resume}';
  const about =  await client.fetch(aboutQuery);
  
  const aboutData = about.map((data:any) => ({
    id: data._id,
    name: data.name,
    tagline: data.tagline,
    description: data.description,
    heroImage: imageUrlFor(data.heroImage).url(),
    resumeUrl: data.resume
  }));

  return (
    <>
      <InViewBasic>
        <div className="max-w-[1400px] mx-auto px-8">
          <HeroSection2  {...aboutData[0]}/>
        </div>
      </InViewBasic>
      <InViewBasic>
        <AboutSection />
      </InViewBasic>
      <InViewBasic>
        <SkillsSection />
      </InViewBasic>
      <InViewBasic>
        <PortfolioSection />
      </InViewBasic>
      <InViewBasic>
        <WorkingExperiance />
      </InViewBasic>
      {/* <InViewBasic>
        <BLogSection />
      </InViewBasic> */}
      <InViewBasic>
        <ContactSection />
      </InViewBasic>
    </>
  );
}
