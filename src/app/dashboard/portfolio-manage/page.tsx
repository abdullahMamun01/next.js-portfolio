import { deleteBlogAction, deleteProjectAction } from "@/app/action";
import DeleteButton from "@/components/portfolio-manage/DeleteButton";
import SkillList from "@/components/portfolio-manage/SkillList";
import {
  allBlogFromDB,
  allJobExperianceFromDB,
  allProjectFromDB,
} from "@/database/queries";

import React from "react";

export const revalidate = 60;

export default function page() {
  return (
    <div className="px-20 p-6 rounded-lg shadow-md">
      <SkillList />
      <ProjectList />
      <BlogList />
      <ExperianceList />
    </div>
  );
}

async function ProjectList() {
  const projects = await allProjectFromDB();
  return (
    <div className="my-8">
      <h1 className="my-2 bg-sky-500 px-4 py-3 w-1/5">Projects </h1>
      <ul className="space-y-2">
        {projects.map((project, i) => (
          <li key={i} className="border-b pb-2 py-4 flex gap-4 items-center">
            <h3 className="font-semibold">{project.title}</h3>
            <DeleteButton
              id={project?._id?.toString() as string}
              deleteAction={deleteProjectAction}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

async function ExperianceList() {
  const experiances = await allJobExperianceFromDB();
  return (
    <div className="my-8">
      <h1 className="my-2 bg-sky-500 px-4 py-3 w-1/5">ExperianceList </h1>
      <ul className="space-y-2">
        {experiances.map((experiance, i) => (
          <li key={i} className="border-b pb-2 py-4 flex gap-4 items-center">
            <h3 className="font-semibold">{experiance.position}</h3>
            <h3 className="font-semibold bg-gray-300 text-black px-4 py-2">
              {experiance.company}
            </h3>

            <DeleteButton
              id={experiance?._id?.toString() as string}
              deleteAction={deleteProjectAction}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

async function BlogList() {
  const blogs = await allBlogFromDB();
  return (
    <div className="my-8">
      <h1 className="my-2 bg-sky-500 px-4 py-3 w-1/5">BlogList </h1>
      <ul className="space-y-2">
        {blogs.map((blog, i) => (
          <li key={i} className="border-b pb-2 py-4 flex gap-4 items-center">
            <h3 className="font-semibold">{blog.title}</h3>

            <DeleteButton
              id={blog?._id?.toString() as string}
              deleteAction={deleteBlogAction}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
