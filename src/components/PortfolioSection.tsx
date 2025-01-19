/* eslint-disable @typescript-eslint/no-explicit-any */


import { client, imageUrlFor } from "@/sanity/client";
import Image from "next/image";

import React from "react";

import Link from "next/link";
/* *[_type == "post"]{ _id, title } */
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
export default async function PortfolioSection() {
  const projectQuer =
    '*[_type == "project"]{_id, name, description, clientRepo,serverRepo, liveUrl,tags, image}';
  const projectListFromDB = await client.fetch(projectQuer);

  const projects: TProject[] = projectListFromDB.map((pj: any) => ({
    id: pj._id,
    name: pj.name,
    description: pj.description,
    clientRepo: pj.clientRepo,
    serverRepo: pj.serverRepo,
    liveUrl: pj.liveUrl,
    tags: pj.tags,
    imageUrl: imageUrlFor(pj.image).url(),
  }));

  // const query = `*[_id == $id][0]`; // Query for the document by _id

  //   const item = await client.fetch(query, {id: `901c1135-9577-46e3-b9bd-d4ad38f3cc77`});

  return (
    <section className="min-h-screen text-white py-20 relative">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl text-center md:text-start  md:text-5xl font-bold mb-16">Things I have Worked on</h2>

        {projects?.map((pj: TProject) => (
          <div className="relative mb-20 round px-4 md:px-0" key={pj.id}>
            <Link href={`/projects/${pj.id}`}>
              {/* Left side content */}
              <div className="relative lg:flex items-center  ">
                {/* Description box - positioned to overlap */}
                <div className="bg-[#172A45] lg:order-2 p-8 flex-row-reverse rounded-md md:rounded-xl lg:absolute lg:left-0 lg:top-1/2 lg:w-[550px] z-10 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className=" w-full lg:w-3/3 mb-8 ">
                    <p className="text-sm text-[#64ffda] mb-2">
                      Featured Project
                    </p>
                    <h3 className="text-xl text-[#64ffda] mb-2 line-clamp-1">
                      {pj.name}
                    </h3>
                  </div>

                  <div className="w-full md:hidden mb-4">
                      <Image
                        src={pj.imageUrl}
                        alt="PIAIC Web Portal Screenshot"
                        className="object-cover w-full h-auto"
                        width={1000}
                        height={1000}
                      />
                    </div>
                  <p className="text-gray-300 text-[1rem] mb-3 leading-relaxed line-clamp-3">
                    {pj.description}
                  </p>

                  {/* Repository Links */}
                  {/* <div className="flex gap-4 mb-8">
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
                </div> */}

                  {/* Technologies Grid */}
                  <div className="grid grid-cols-3 md:grid-cols-5 gap-1 text-xs text-[#64ffda]">
                    {pj?.tags?.map((pj: string, i: number) => (
                      <React.Fragment key={i}>
                        <span className="bg-[#64ffda]/10 flex justify-center items-center py-1 rounded-md">
                          {pj}
                        </span>
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Browser Window - positioned on the right */}
                <div className="max-sm:hidden lg:order-1 lg:ml-auto lg:w-[700px]">
                  <div className="rounded-lg overflow-hidden shadow-2xl">
                    <div className="bg-[#2a2f37] p-2 flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="flex-1 px-3">
                        <div className="bg-[#1a1f26] rounded text-center text-sm py-1 text-gray-400">
                          {pj.liveUrl}
                        </div>
                      </div>
                    </div>
                    <div className="relative aspect-[16/9] z-[-10]">
                      <Image
                        src={pj.imageUrl}
                        alt="PIAIC Web Portal Screenshot"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
