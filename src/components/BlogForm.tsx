"use client";
import React, { useState } from "react";
import CloudinaryWidget from "./CloudinaryWidget";
import { blogAction } from "@/app/action";

// Define the type for the form data
interface BlogFormData {
  title: string;
  description: string;
  imageUrl: string;
  blogUrl: string;
}

export default function BlogForm() {
  // Form state with typed form data
  const [formData, setFormData] = useState<BlogFormData>({
    title: "",
    description: "",
    imageUrl: "",
    blogUrl: "",
  });

  // Image state to store Cloudinary image URL

  const handleImageUpload = (imageUrl: string) => {
    setFormData((prevData) => ({
      ...prevData,
      imageUrl: imageUrl,
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // Combine formData with image URL from Cloudinary

   if(formData.imageUrl){
    await blogAction(formData)
    setFormData({
      title: "",
      description: "",
      imageUrl: "",
      blogUrl: "",
      
    })
   }


 
    // You can now send blogData to your API endpoint

    // Example: await fetch('/api/blog', { method: 'POST', body: JSON.stringify(blogData) });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-6 mb-6 md:grid-cols-1">
        {/* Blog Title Field */}
        <div>
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Blog Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter blog title"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            required
          />
        </div>
        {/* Blog url Field */}
        <div>
          <label
            htmlFor="blogUrl"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Blog Url
          </label>
          <input
            type="text"
            id="blogUrl"
            name="blogUrl"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter blog title"
            value={formData.blogUrl}
            onChange={(e) =>
              setFormData({ ...formData, blogUrl: e.target.value })
            }
            required
          />
        </div>
        {/* Blog Description Field */}
        <div>
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Blog Description
          </label>
          <textarea
            id="description"
            rows={10}
            name="description"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter blog description"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            required
          />
        </div>

        {/* Image Upload Field */}
        <div>
          <label
            htmlFor="image"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Blog Thumbnail
          </label>
     
          <CloudinaryWidget setImageUrl={handleImageUpload} />
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  );
}
