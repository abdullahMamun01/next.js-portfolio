import React from "react";
import HeroSection from "../components/HeroSection";
import SkillsSection from "../components/SkillSection";
import PortfolioSection from "../components/PortfolioSection";
import AboutSection from "../components/AboutSection";
import WorkingExperiance from "../components/WorkingExperiance";
import BLogSection from "../components/BlogSection";
import ContactSection from "../components/ContactSection";
import { InViewBasic } from "@/components/animation/InviewBasic";

export default async function HomePage() {
  return (
    <>
      <InViewBasic>
        <div className="max-w-[1400px] mx-auto px-8">
          <HeroSection />
        </div>
      </InViewBasic>
      <InViewBasic>
        <AboutSection />
      </InViewBasic>

        <SkillsSection />

      <InViewBasic>
        <PortfolioSection />
      </InViewBasic>
      <InViewBasic>
        <WorkingExperiance />
      </InViewBasic>
      <InViewBasic>
        <BLogSection />
      </InViewBasic>
      <InViewBasic>
        <ContactSection />
      </InViewBasic>
    </>
  );
}
