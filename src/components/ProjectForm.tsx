'use client';
import React, { useState } from 'react';
import CloudinaryWidget from './CloudinaryWidget';
import { projectAction } from '@/app/action';

interface ProjectFormState {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[] ;
  liveUrl: string;
  githubClient: string;
  githubBackend: string;
}

export default function ProjectForm() {
  const [formData, setFormData] = useState<ProjectFormState>({
    title: '',
    description: '',
    imageUrl: '',
    technologies: [],
    liveUrl: '',
    githubClient: '',
    githubBackend: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if(name === 'technologies'){
      const technologies = value.split(',')
      setFormData((prevData) => ({
        ...prevData,
        technologies,
      }));
    }else 
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
  };

  const handleImageUpload = (imageUrl: string) => {
    setFormData((prevData) => ({
      ...prevData,
      imageUrl: imageUrl,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic (e.g., sending data to a server)
    await projectAction(formData)
    
    setFormData({
      title: '',
      description: '',
      imageUrl: '',
      technologies: [],
      liveUrl: '',
      githubClient: '',
      githubBackend: '',
    })
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-6 mb-6 md:grid-cols-1">
        <div>
          <label
            htmlFor="projectTitle"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Project Title
          </label>
          <input
            type="text"
            id="projectTitle"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter project title"
            required
          />
        </div>

        <div>
          <label
            htmlFor="projectDescription"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Project Description
          </label>
          <textarea
            id="projectDescription"
            name="description"
            rows={10}
            value={formData.description}
            onChange={handleInputChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter project description"
            required
          />
        </div>

        <div>
          <label
            htmlFor="image"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Project Thumbnail
          </label>
          <CloudinaryWidget setImageUrl={handleImageUpload} />
          {formData.imageUrl && <p>Image uploaded: {formData.imageUrl}</p>}
        </div>

        <div>
          <label
            htmlFor="technologies"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Technologies (comma-separated)
          </label>
          <input
            type="text"
            id="technologies"
            name="technologies"
            value={formData.technologies}
            onChange={handleInputChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter technologies"
            required
          />
        </div>

        <div>
          <label
            htmlFor="liveUrl"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Project Live URL
          </label>
          <input
            type="text"
            id="liveUrl"
            name="liveUrl"
            value={formData.liveUrl}
            onChange={handleInputChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter live URL"
            required
          />
        </div>

        <div>
          <label
            htmlFor="githubClient"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            GitHub Client Repository
          </label>
          <input
            type="text"
            id="githubClient"
            name="githubClient"
            value={formData.githubClient}
            onChange={handleInputChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter GitHub client repository"
            required
          />
        </div>

        <div>
          <label
            htmlFor="githubBackend"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            GitHub Backend Repository
          </label>
          <input
            type="text"
            id="githubBackend"
            name="githubBackend"
            value={formData.githubBackend}
            onChange={handleInputChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter GitHub backend repository"
            required
          />
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
