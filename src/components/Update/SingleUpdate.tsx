"use client";

import { useEffect, useState } from "react";
import { UploadCloud, X } from "lucide-react";
import { toast } from "sonner";
import Image from "next/image";
import Blogsfetch from "@/utils/actions/Blogsfetch";
import BlogUpdateFetch from "@/utils/actions/BlogUpdate";

interface ProjectData {
  _id: string;
  image: string;
  title: string;
  description: string;
}

const SingleUpdate = ({ id }: { id: string }) => {
  const [ , setProject] = useState<ProjectData | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const fetchProject = async () => {
      setLoading(true);
      try {
        const data = await Blogsfetch();
        const filtered = data.find((item: ProjectData) => item._id === id[0]);

        if (filtered) {
          setProject(filtered);
          setTitle(filtered.title);
          setDescription(filtered.description);
          setPreviewUrl(filtered.image);
        }
      } catch (err) {
        toast.error("Error loading project");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();


    const formData = new FormData();
    if (selectedImage) {
      formData.append("file", selectedImage);
    }

    formData.append(
      "data",
      JSON.stringify({
        title,
        description,
        image: !selectedImage ? previewUrl : undefined,
      })
    );

    try {
      const res = await BlogUpdateFetch(id[0], formData);

      if (res?.success) {
        toast.success("Successfully updated blog!");
      } else {
        toast.error("Update failed!");
      }
    } catch (err) {
      toast.error("Something went wrong");
      console.error(err);
    }
  };

  if (loading) return <p>Loading blog...</p>;

  return (
    <div className="flex items-center justify-center min-h-screen mt-10 p-4">
      <form
        onSubmit={handleSubmit}
        className="p-6 rounded-2xl shadow-lg max-w-lg w-full space-y-4 bg-white"
      >
        <h2 className="text-2xl font-semibold text-gray-700 text-center">
          Update Blog
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
          <label className="block text-gray-600 font-medium mb-1">Title</label>
          <input
            type="text"
            name="title"
            className="input input-bordered input-primary w-full"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            
          />
        </div>
        <div>
          <label className="block text-gray-600 font-medium mb-1">
            Description
          </label>
          <textarea
            name="description"
            className="textarea textarea-primary w-full"
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
    
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
