import { allProjectFromDB } from "@/database/queries";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function ProjectsPage() {
  const projects = await allProjectFromDB();
  return (
    <section className="bg-[#04335C] text-white py-10 md:px-8 ">
      <div className=" mx-auto  px-[5rem]">
        <div className="mb-12 ">
          <div>
            <h1 className="text-4xl font-bold mb-8 text-center">All PROJECT</h1>
          </div>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-10 md:px-20 ">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#07223A] text-white rounded-lg overflow-hidden"
            >
              <Link href={`/projects/${project._id.toString()}`}>
                <div className="relative h-48">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </Link>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm leading-6 line-clamp-3">
                  {project.description}
                </p>
                <Link
                  href={`/projects/${project._id.toString()}`}
                  className="text-white hover:text-blue-400 flex items-center"
                >
                  <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full flex items-center px-4">
                    View Project <ChevronRight size={20} />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
