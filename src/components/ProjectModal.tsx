"use client";

import React, {  useRef } from "react";
import { GithubIcon, Link2, X } from "lucide-react";
import Image from "next/image";

import styles from "./project-modal.module.css";

interface Technology {
  name: string;
  color?: string;
}

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  type: string;
  technologies: Technology[];
  features: string[];
  imageUrl: string;
}

export default function ProjectModal({
  title,
  type,
  technologies,
  features,
  imageUrl,
}: ProjectModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);


 

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div
        ref={modalRef}
        className="bg-[#1a1f2e] text-white w-full max-w-4xl rounded-lg overflow-hidden shadow-xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div className="flex flex-col max-h-[90vh]">
          <div className="relative w-full shrink-0">
            <Image
              src={imageUrl || "/placeholder.svg"}
              alt={title}
              width={1200}
              height={600}
              className="w-full object-cover h-[300px]"
            />
            <button

              className="absolute right-4 top-4 z-10 rounded-full bg-black bg-opacity-50 p-2 text-white hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className={`flex-1 overflow-y-auto ${styles.customScrollbar}`}>
            <div className="p-6">
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-purple-400">{type}</p>
                  <h2 id="modal-title" className="text-2xl font-semibold">
                    {title}
                  </h2>
                </div>

                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <span
                      key={tech.name}
                      className={`inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-semibold leading-none text-white transform rounded-full ${
                        tech.color ? `bg-${tech.color}` : "bg-gray-700"
                      }`}
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Features:</h3>
                  <ul className="space-y-2">
                    {features.map((feature, index) => (
                      <li key={index} className="text-gray-300">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-4 mb-8">
        <button className="text-[#64ffda] border-[#64ffda] bg-[#64ffda]/10 flex justify-center items-center px-4 rounded-md">
          <Link2 className="mr-2 h-4 w-4" />
          Live Demo
        </button>
        <button className="text-[#64ffda] border-[#64ffda] bg-[#64ffda]/10 flex justify-center items-center px-4 rounded-md">
          <GithubIcon className="mr-2 h-4 w-4" />
          Client Repo
        </button>
        <button className="text-[#64ffda] border-[#64ffda] bg-[#64ffda]/10 flex justify-center items-center px-4 rounded-md py-2">
          <GithubIcon className="mr-2 h-4 w-4" />
          Server Repo
        </button>
      </div>
    </div>
  );
}
