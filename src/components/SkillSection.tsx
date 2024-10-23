import { allSkillFromDB } from "@/database/queries";
import Image from "next/image";


// const skills = [
//   { name: "React.js", icon: <FaReact className="text-[#61DAFB]" /> },
//   { name: "Next.js", icon: <SiNextdotjs className="text-gray-100" /> },
//   { name: "NextAuth.js", icon: <SiNextdotjs className="text-gray-100" /> },
//   {
//     name: "React Hook Form",
//     icon: <TbBrandReactNative className="text-[#EC5990]" />,
//   },
//   { name: "Redux", icon: <SiRedux className="text-[#764ABC]" /> },
//   {
//     name: "React Query",
//     icon: <TbBrandReactNative className="text-[#FF4154]" />,
//   },
//   { name: "Shadcn UI", icon: <TbBrandReactNative className="text-blue" /> },
//   {
//     name: "Material UI",
//     icon: <TbBrandReactNative className="text-[#0081CB]" />,
//   },
//   { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
//   { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
//   { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
//   { name: "Express.js", icon: <SiExpress className="text-black" /> },
//   { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
// ];

export default async function SkillsSection() {
  const skills = await allSkillFromDB()

  return (
    <section className="py-16 bg-gradient-to-b  from-[#07223A] to-[#062E4F]  text-white px-[3rem]" id="#skill">
      <div className=" mx-auto md:px-20">
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-[#04335C] text-gray-300 rounded-lg shadow-md p-6 flex flex-col items-center justify-center transition-transform hover:scale-105"
            >
              <div className="text-4xl mb-3"><Image width={500} height={500} src={skill.icon} className="w-[50px] h-[50px] object-contain"   alt={skill.skil}/></div>
              
              <h3 className="text-lg font-semibold text-center">
                {skill.skill}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
