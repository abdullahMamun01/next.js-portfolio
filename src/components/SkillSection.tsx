/* eslint-disable @typescript-eslint/no-explicit-any */
import { client, imageUrlFor } from "@/sanity/client";
import Image from "next/image";

export const revalidate = 60;



export default async function SkillsSection() {
  const skillQUery = `*[_type == "skill"]{name,icon,_id}`
  const skillFromDb = await client.fetch(skillQUery)

  const skills = skillFromDb.map((skill: any) => ({ id: skill._id,name: skill.name, icon: imageUrlFor(skill.icon).url()}))
  
  return (
    <section className="py-16  px-6  text-white " id="#skill">
      <div className=" mx-auto md:px-10">
        <h2 className="text-3xl font-bold text-center mb-8 uppercase ">
          My Skills
        </h2>
        <div className="">
          <p className=" text-gray-300 my-8 ">
            As a junior MERN stack developer, I excel in crafting dynamic and
            responsive user interfaces with React and Next.js. I efficiently
            manage state using Redux and RTK Query, and optimize server data
            handling with React Query. For form handling and validation, I use
            React Hook Form and Formik, and leverage Zod for robust schema
            validation. On the backend, I develop RESTful APIs with Express and
            handle data with Mongoose, employing TypeScript to ensure code
            quality and maintainability.
          </p>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill : {name:string , icon:string}, index:number) => (
            <div
              key={index}
              className="bg-[#172A45] text-gray-300 rounded-lg shadow-md p-6 flex flex-col items-center justify-center transition-transform hover:scale-105"
            >
              {/* <div className="text-4xl mb-3"><Image width={500} height={500} src={skill.icon} className="w-[50px] h-[50px] object-contain"   alt={skill.skil}/></div> */}
              <Image width={500} height={500} src={skill.icon} className="w-[50px] h-[50px] object-contain" alt={skill.name}/>
              <h3 className="text-md md:text-lg font-semibold text-center mt-2">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
