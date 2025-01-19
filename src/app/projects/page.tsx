/* eslint-disable @typescript-eslint/no-explicit-any */
import { client, imageUrlFor } from "@/sanity/client";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type TProject = {
  id: string; // Unique identifier, likely a MongoDB ObjectId
  name: string; // Project title
  description: string; // Brief description of the project
  clientRepo: string; // URL for the client-side repository
  serverRepo: string; // URL for the server-side repository
  liveUrl: string; // URL for the live version of the project
  tags: string[]; // Array of tags associated with the project
  imageUrl: string; // URL of the project's image
};

export default async function ProjectsPage() {
  // const projects = await allProjectFromDB();


  const projectQuer =
      '*[_type == "project"]{_id, name, description, clientRepo,serverRepo, liveUrl,tags, image}';
    const projectListFromDB = await client.fetch(projectQuer);
  const projects : TProject[]= projectListFromDB.map((pj: any) => ({
    id: pj._id,
    name: pj.name,
    description: pj.description,
    clientRepo: pj.clientRepo,
    serverRepo: pj.serverRepo,
    liveUrl: pj.liveUrl,
    tags: pj.tags,
    imageUrl: imageUrlFor(pj.image).url(),
  }))


  return (
    <section className=" text-white py-10  ">
      <div className=" mx-auto ">
        <div className="mb-12 ">
          <div>
            <h1 className="text-4xl font-bold mb-8 text-center">All PROJECT</h1>
          </div>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-6 px-10 md:px-20 ">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#172A45] text-white rounded-lg overflow-hidden"
            >
              <Link href={`/projects/${project.id}`}>
                <div className="relative h-48">
                  <Image
                    src={project.imageUrl}
                    alt={project.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </Link>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-gray-300 text-sm leading-6 line-clamp-3">
                  {project.description}
                </p>
                <Link
                  href={`/projects/${project.id}`}
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
