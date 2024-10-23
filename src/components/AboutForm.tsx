/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import CloudinaryWidget from "./CloudinaryWidget";
import { updateUserAction } from "@/app/action";

// Define the IUser interface for the form
interface IUser {
  bio: string;
  resumeUrl: string;
  profileImageUrl: string;
  backgroundImageUrl: string;
  skillTitle: string;
  aboutMe: string;
  socialLinks?: {
    githubUrl?: string;
    linkedinUrl?: string;
    twitterUrl?: string;
    personalWebsiteUrl?: string;
  };
}

export default function AboutMeForm() {
  const [formData, setFormData] = useState<IUser>({
    bio: "",
    resumeUrl: "",
    profileImageUrl: "",
    backgroundImageUrl: "",
    skillTitle: "",
    aboutMe: "",
    socialLinks: {
      githubUrl: "",
      linkedinUrl: "",
      twitterUrl: "",
    },
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

  const handleSocialLinksChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      socialLinks: {
        ...prevData.socialLinks,
        [name]: value,
      },
    }));
  };

  const handleImageUpload = (
    imageUrl: string,
    field: "profileImageUrl" | "backgroundImageUrl"
  ) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: imageUrl,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const updateData: any = {};
      const { socialLinks, ...res } = formData;
      const withoutSocial = Object.keys(res);
      const withSocial = Object.keys(socialLinks as object);
      for (const key of withoutSocial) {
        const value = formData[key as keyof typeof formData];

        if (value !== "") {
          updateData[key] = value
        }
      }

      for (const key of withSocial) {
        if (socialLinks && typeof socialLinks === "object") {
          const socialValue = socialLinks[key as keyof typeof socialLinks];
          if (socialValue !== "") {
            updateData['socialLinks'] = {
              ...updateData['socialLinks'] ,
              [key] : socialValue
            };
          }
        }
      }

        await updateUserAction(updateData);
        console.log(updateData)

      
        setFormData({
          bio:"" ,
          resumeUrl: "",
          profileImageUrl: "",
          backgroundImageUrl: "",
          skillTitle: "",
          aboutMe: "",
          socialLinks: {
            githubUrl: "",
            linkedinUrl: "",
            twitterUrl: "",
          },
        });
    } catch (error: any) {
      console.error(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-6 mb-6 md:grid-cols-1">
        {/* Bio */}
        <div>
          <label
            htmlFor="resumeUrl"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            skill Title
          </label>

          <input
            type="text"
            id="skillTitle"
            name="skillTitle"
            value={formData.skillTitle}
            onChange={(e) =>
              setFormData({ ...formData, skillTitle: e.target.value })
            }
            className="bg-gray-50 border mb-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="skill Title"
          />
        </div>
        <div>
          <label
            htmlFor="bio"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Bio
          </label>
          <textarea
            id="bio"
            name="bio"
            rows={4}
            value={formData.bio}
            onChange={handleInputChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter a short bio"

          />
        </div>

        {/* resume link */}
        <div>
          <label
            htmlFor="resumeUrl"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Resume Links
          </label>

          <input
            type="text"
            id="resumeUrl"
            name="resumeUrl"
            value={formData.resumeUrl}
            onChange={(e) =>
              setFormData({ ...formData, resumeUrl: e.target.value })
            }
            className="bg-gray-50 border mb-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Resume URL"
          />
        </div>

        {/* Social Links */}
        <div>
          <label
            htmlFor="socialLinks"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Social Links
          </label>

          <input
            type="text"
            id="githubUrl"
            name="githubUrl"
            value={formData.socialLinks?.githubUrl}
            onChange={handleSocialLinksChange}
            className="bg-gray-50 border mb-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="GitHub URL"
          />
          <input
            type="text"
            id="linkedinUrl"
            name="linkedinUrl"
            value={formData.socialLinks?.linkedinUrl}
            onChange={handleSocialLinksChange}
            className="bg-gray-50 border mb-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="LinkedIn URL"
          />
          <input
            type="text"
            id="twitterUrl"
            name="twitterUrl"
            value={formData.socialLinks?.twitterUrl}
            onChange={handleSocialLinksChange}
            className="bg-gray-50 border mb-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Twitter URL"
          />
        </div>

        {/* Profile Image */}
        <div>
          <label
            htmlFor="profileImage"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Profile Image
          </label>
          <CloudinaryWidget
            setImageUrl={(url) => handleImageUpload(url, "profileImageUrl")}
          />
          {formData.profileImageUrl && (
            <p>Image uploaded: {formData.profileImageUrl}</p>
          )}
        </div>

        {/* Background Image */}
        <div>
          <label
            htmlFor="backgroundImage"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Background Image
          </label>
          <CloudinaryWidget
            setImageUrl={(url) => handleImageUpload(url, "backgroundImageUrl")}
          />
          {formData.backgroundImageUrl && (
            <p>Image uploaded: {formData.backgroundImageUrl}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="text-white w-1/6 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm  px-5 py-2.5 text-center"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
