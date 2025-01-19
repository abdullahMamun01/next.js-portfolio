
import React from "react";

export const dynamic = 'force-dynamic';



export default async  function WorkingExperiance() {
  const experiances = [
    {
      id: 1,
      position: "Front-end Developer",
      company: "Prayersconnect",
      location: "Remote",
      startDate: "Apr 2024",
      endDate: "Aug 2024",
      employmentType: "Full-time",
      experienceGain: "Developed scalable web applications and improved system performance."
    }
  ]

  return (
    <div className="bg-[#172A45] px-10 md:px-20" id="experiance">
      <div className="container py-16">
        <div className="mb-2 text-white">
          <span className="text-sm  px-2 py-1 rounded-full">
            EXPERIENCE
          </span>
        </div>
        <div>
          <h1 className="text-white text-2xl md:text-4xl font-bold uppercase">
            MY WORKING <span className="text-[#64ffda] ">Experiance </span>
          </h1>
        </div>
        <div>
          {experiances.map((experiance) => (
            <div
              key={experiance.id}
              className="flex flex-col md:flex-row bg-[#111827] rounded-lg overflow-hidden gap-3 shadow-md  my-8 p-5 md:p-10"
            >
              <div className="bg-[#172A45] p-6 md:w-1/3 text-white rounded-t-md">
                <h3 className="text-2xl font-bold mb-2">{experiance.position}</h3>
                <p className="text-sm mb-2">{experiance.company} {" "} | {" "} {experiance.location}</p>
                <p className="text-sm mb-4">{experiance.startDate} - {experiance.endDate}</p>
                <span className="bg-white text-[#4169e1] px-3 py-1 rounded-full border text-xs font-semibold ">
                  {experiance.employmentType}
                </span>
              </div>
              <div className="p-6 md:w-2/3">
                <h4 className="text-xl font-semibold mb-4 text-white">
                  About Company
                </h4>
                <p className="text-gray-300 line-clamp-3">{experiance.experienceGain}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
