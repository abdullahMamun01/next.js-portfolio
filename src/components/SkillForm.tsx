"use client";
import React, { useState } from "react";
import CloudinaryWidget from "./CloudinaryWidget";
import { skillAction } from "@/app/action";

interface SkillFormState {
  skill: string;
  icon: string;
}

export default function SkillForm() {
  const [formData, setFormData] = useState<SkillFormState>({
    skill: "",
    icon: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageUpload = (imageUrl: string) => {
    setFormData((prevData) => ({
      ...prevData,
      icon: imageUrl,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await skillAction(formData);
    setFormData({
      skill: "",
      icon: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-6 mb-6 md:grid-cols-1">
        <div>
          <label
            htmlFor="skillName"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Skill Name
          </label>
          <input
            type="text"
            id="skillName"
            name="skill"
            value={formData.skill}
            onChange={handleInputChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter skill name"
            required
          />
        </div>

        {/* <div>
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Description
          </label>
          <textarea
            id="description"
            rows={10}
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter skill description"
            required
          />
        </div> */}

        <div>
          {/* Cloudinary Widget to set image URL */}
          <CloudinaryWidget setImageUrl={handleImageUpload} />
          {formData.icon && <p>Image uploaded: {formData.icon}</p>}
        </div>
      </div>

      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  );
}
