
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-async-client-component */
"use client";



import ProjectUpdatefetch from "@/utils/actions/ProjectUpdatefetch";
import projectUser from "@/utils/actions/projectUser";
import { useEffect, useState } from "react";

type TProject = {
    _id: string;
    image: string;
    title: string;
    description: string[];
    github_link: string;
    project_link: string;
    isDeleted: boolean;
    technologies: string[];
    createdAt: string;
    updatedAt: string;
  };

const UpdateBlogProject = ({ id }: { id: string }) => {
  const [, setProject] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [formData, setFormData] = useState({
    image: "",
    title: "",
    description: [""],
    github_link: "",
    project_link: "",
    isDeleted: false,
    technologies: [""],
  });

  useEffect(() => {
    const getProject = async () => {
      setLoading(true);
      try {
        const data = await projectUser();
        const filteredProject = data.find((da: TProject) => da._id === id[0]);
        if (filteredProject) {
          setProject(filteredProject);
          setFormData({
            image: filteredProject.image || "",
            title: filteredProject.title || "",
            description: filteredProject.description || [""],
            github_link: filteredProject.github_link || "",
            project_link: filteredProject.project_link || "",
            isDeleted: filteredProject.isDeleted,
            technologies: filteredProject.technologies || [""],
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
    const { name, value } = e.target;
    if (name === "description" || name === "technologies") {
      setFormData({
        ...formData,
        [name]: value.split(","),
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await ProjectUpdatefetch(id[0], formData);
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
        <h2 className="text-2xl font-semibold text-black text-center mt-10">Update Project</h2>

        <div>
          <label className="block text-black font-medium">Image URL</label>
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
          <label className="block text-black font-medium">Title</label>
          <input
            type="text"
            placeholder="Enter title"
            className="input input-bordered input-primary w-full mt-1"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-gray-600 font-medium">Description (comma-separated)</label>
          <textarea
            placeholder="Enter description"
            rows={4}
            className="textarea textarea-primary w-full mt-1"
            name="description"
            value={formData.description.join(", ")}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-black font-medium">GitHub Link</label>
          <input
            type="text"
            placeholder="Enter GitHub link"
            className="input input-bordered input-primary w-full mt-1"
            name="github_link"
            value={formData.github_link}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-black font-medium">Project Link</label>
          <input
            type="text"
            placeholder="Enter project link"
            className="input input-bordered input-primary w-full mt-1"
            name="project_link"
            value={formData.project_link}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-black font-medium">Technologies (comma-separated)</label>
          <input
            type="text"
            placeholder="Enter technologies"
            className="input input-bordered input-primary w-full mt-1"
            name="technologies"
            value={formData.technologies.join(", ")}
            onChange={handleChange}
          />
        </div>

        <div className="flex justify-center">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateBlogProject;
