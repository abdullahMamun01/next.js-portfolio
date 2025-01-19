/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

import { client, imageUrlFor } from "@/sanity/client";

export default async function ProjectDetails({
  params: { projectId },
}: {
  params: { projectId: string };
}) {
  const query = `*[_id == $id][0]{_id, name, description, clientRepo,serverRepo, liveUrl,tags ,features, image}`; // Query for the document by _id

  const project = await client.fetch(query, { id: projectId });

  const image = imageUrlFor(project.image).url();

  return (
    <div className="min-h-screen  text-white px-6">
      <main className="container mx-auto px-4 py-12">
        <Link
          href="/projects"
          className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Projects
        </Link>

        <h1 className="text-4xl font-bold mb-4">{project.name}</h1>

        <div className="mb-8">
          <Image
            src={image}
            alt="CARE-SPA Project Screenshot"
            width={1200}
            height={600}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="my-4">
          <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
          <div className="flex flex-wrap gap-2">
            {project?.tags?.map((tech: string, index: number) => (
              <span
                key={index}
                className="px-3 py-1 bg-[#0f2744] text-blue-300 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <h3 className="text-xl font-semibold mb-2">Key Features</h3>
            <ul className="list-disc list-inside text-gray-300 mb-4">
              {project.features?.map(
                (item: { feature: string; _key: string }) => (
                  <li key={item._key}>{item.feature}</li>
                )
              )}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Project Information</h2>
            <div className="bg-[#0f2744] rounded-lg p-6">
              <p className="mb-2">
                <strong>Client:</strong> {project.title}
              </p>

              <div className="mt-6">
                <a
                  href={`${project.liveUrl}`}
                  target="_blank"
                  className="inline-flex items-center bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 mb-2 w-full justify-center"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Visit Live Site
                </a>
                <a
                  href={`${project.clientRepo}`}
                  target="_blank"
                  className="inline-flex items-center my-2 bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition duration-300 w-full justify-center"
                >
                  <Github className="mr-2 h-4 w-4" />
                  View Github Client source Code
                </a>
                <a
                  href={`${project.serverRepo}`}
                  target="_blank"
                  className="inline-flex items-center bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition duration-300 w-full justify-center"
                >
                  <Github className="mr-2 h-4 w-4" />
                  View Github Backend source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
