"use client";

import createProject from "@/utils/actions/createProject";
import { useState } from "react";

interface FormData {
  title: string;
  image: string;
  description: string[];
  project_link: string;
  github_link: string;
  technologies: string[];
}

const ProjectForm = () => {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    image: "",
    description: [],
    project_link: "",
    github_link: "",
    technologies: [],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleArrayChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    const arrayValues = value.split(",").map((item) => item.trim());
    setFormData({ ...formData, [name]: arrayValues });
  };

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await createProject(formData);
      if (res?.success) {
        alert("successfully Create Project");
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      alert("Something went error");
      throw new Error(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl shadow-lg max-w-lg w-full space-y-4"
      >
        <h2 className="text-2xl font-semibold text-black text-center mt-20">Create Project</h2>

        <div>
          <label className="block text-black font-medium">Image URL</label>
          <input
            type="text"
            placeholder="Enter image URL"
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
            placeholder="Enter project title"
            className="input input-bordered input-primary w-full"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-black font-medium">Description</label>
          <textarea
            placeholder="Enter description must be (comma separated)"
            rows={4}
            className="textarea textarea-primary w-full mt-1"
            name="description"
            value={formData.description.join(", ")}
            onChange={handleArrayChange}
          />
        </div>

        <div>
          <label className="block text-black font-medium">Technologies</label>
          <input
            type="text"
            placeholder="Enter technologies must be (comma separated)"
            className="input input-bordered input-primary w-full mt-1"
            name="technologies"
            value={formData.technologies.join(", ")}
            onChange={handleArrayChange}
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

        <div className="flex justify-center">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProjectForm;
