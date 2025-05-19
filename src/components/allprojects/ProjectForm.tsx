"use client";

import { useState } from "react";
import { UploadCloud, X } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";
import createProject from "@/utils/actions/createProject";

const ProjectForm = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    project_link: "",
    github_link: "",
    technologies: "",
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.size < 3 * 1024 * 1024) {
      setSelectedImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    } else {
      toast.error("Image must be less than 3MB");
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
    setPreviewUrl(null);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.title ||
      !formData.description ||
      !formData.project_link ||
      !formData.github_link ||
      !formData.technologies ||
      !selectedImage
    ) {
      toast.error("All fields are required!");
      return;
    }

    const submissionData = new FormData();
    submissionData.append("file", selectedImage);
    submissionData.append(
      "data",
      JSON.stringify({
        title: formData.title,
        description: formData.description.split(",").map((d) => d.trim()),
        project_link: formData.project_link,
        github_link: formData.github_link,
        technologies: formData.technologies.split(",").map((t) => t.trim()),
      })
    );

    const data = submissionData.get("data") as string;
   console.log(data);

    try {
      const res = await createProject(submissionData);
      console.log(res)
      if (res?.success) {
        toast.success("Successfully created project!");
        setFormData({
          title: "",
          description: "",
          project_link: "",
          github_link: "",
          technologies: "",
        });
        handleRemoveImage();
      } else {
        toast.error("Failed to create project");
      }
    } catch (err) {
      toast.error("Something went wrong!");
      console.error(err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen mt-20 p-4">
      <form
        onSubmit={handleSubmit}
        className="p-6 rounded-2xl shadow-lg max-w-lg w-full space-y-4"
      >
        <h2 className="text-2xl font-semibold text-blue-500 text-center">
          Create Project
        </h2>

        <div>
          <label className="block text-gray-600 font-medium mb-1">Image</label>
          {!previewUrl ? (
            <label
              htmlFor="image"
              className="flex items-center flex-col justify-center text-primary border border-dashed border-gray-300 rounded-lg p-5 cursor-pointer"
            >
              <UploadCloud className="w-6 h-6 mb-2" />
              <span className="text-sm text-center font-medium">
                Upload your image
              </span>
              <p className="mt-1 text-xs text-center text-gray-500">
                PNG, JPG up to 3MB
              </p>
              <input
                type="file"
                id="image"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </label>
          ) : (
            <div className="relative">
              <Image
                src={previewUrl}
                alt="Preview"
                width={500}
                height={256}
                className="w-full h-64 object-cover rounded-md"
              />
              <button
                type="button"
                onClick={handleRemoveImage}
                className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full"
              >
                <X size={16} />
              </button>
            </div>
          )}
        </div>

        <div>
          <label className="block text-black font-medium">Title</label>
          <input
            type="text"
            name="title"
            placeholder="Enter title"
            className="input input-bordered input-primary w-full"
            value={formData.title}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-black font-medium">Description</label>
          <textarea
            name="description"
            placeholder="Enter description (comma separated)"
            className="textarea textarea-primary w-full mt-1"
            rows={3}
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-black font-medium">Technologies</label>
          <input
            type="text"
            name="technologies"
            placeholder="React, Node.js, MongoDB"
            className="input input-bordered input-primary w-full"
            value={formData.technologies}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-black font-medium">Project Link</label>
          <input
            type="text"
            name="project_link"
            placeholder="https://yourproject.com"
            className="input input-bordered input-primary w-full"
            value={formData.project_link}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-black font-medium">GitHub Link</label>
          <input
            type="text"
            name="github_link"
            placeholder="https://github.com/yourrepo"
            className="input input-bordered input-primary w-full"
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
