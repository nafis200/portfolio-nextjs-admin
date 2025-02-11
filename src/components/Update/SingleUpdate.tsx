/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-async-client-component */
"use client";

import Blogsfetch from "@/utils/actions/Blogsfetch";
import BlogUpdateFetch from "@/utils/actions/BlogUpdate";
import { useEffect, useState } from "react";

interface ProjectData {
  _id: string;
  image: string;
  title: string;
  description: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const SingleUpdate = ({ id }: { id: string }) => {
  const [, setProject] = useState<ProjectData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [formData, setFormData] = useState({
    image: "",
    title: "",
    description: "",
  });

  useEffect(() => {
    const getProject = async () => {
      setLoading(true);
      try {
        const data = await Blogsfetch();
        
        const filteredProject = data.find((da: ProjectData) => da._id === id[0]);
        console.log(filteredProject )
        if (filteredProject) {
          setProject(filteredProject);
          setFormData({
            image: filteredProject.image || "",
            title: filteredProject.title || "",
            description: filteredProject.description || "",
          });
        }
      } catch (error) {
        console.error("Error fetching project:", error);
      }
      setLoading(false);
    };

    getProject();
  }, [id]);

  if (loading) return <p>Loading project...</p>;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
    
      const res = await BlogUpdateFetch(id[0],formData);

      if (res?.success) {
        alert("Successfully Updated");
      }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      alert("Something went wrong");
      console.error(err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl shadow-lg max-w-lg w-full space-y-4"
      >
        <h2 className="text-2xl font-semibold text-gray-700 text-center">
          Update Blogs
        </h2>

        <div>
          <label className="block text-gray-600 font-medium">Image URL</label>
          <input
            type="text"
            placeholder="Enter image url"
            className="input input-bordered input-primary w-full mt-1"
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-gray-600 font-medium mb-1">Title</label>
          <input
            type="text"
            placeholder="Enter title"
            className="input input-bordered input-primary w-full"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-gray-600 font-medium">Description</label>
          <textarea
            placeholder="Enter description"
            rows={4}
            className="textarea textarea-primary w-full mt-1"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        <div className="flex justify-center">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SingleUpdate;
