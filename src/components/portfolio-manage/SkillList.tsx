import { allSkillFromDB } from "@/database/queries";
import Image from "next/image";
import React from "react";
import DeleteButton from "./DeleteButton";
import { deleteSkillAction } from "@/app/action";




  

export default async function SkillList() {
  const skills = await allSkillFromDB();

  return (
    <div>
      <h1 className='my-2 bg-sky-500 px-4 py-3 w-1/5'>Skills </h1>
      <ul className="space-y-2">
        {skills.map((skill , i) => (
          <li key={i} className="border-b pb-2 py-4 flex gap-4 items-center">
            <h3 className="font-semibold">{skill.skill}</h3>
            <Image width={500}  height={500} src={skill.icon} alt={skill.skill} className="w-[50px] h-[50px]"/>
            <DeleteButton id={skill?._id?.toString() as string} deleteAction={deleteSkillAction}/>

          </li>
        ))}
      </ul>
    </div>
  );
}



