"use client";

import { useState } from "react";
import { UploadCloud, X } from "lucide-react";
import { toast } from "sonner";
import createBlogs from "@/utils/actions/createBlogs";
import Image from "next/image";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline"; 

const MenuBar = ({ editor }: { editor: ReturnType<typeof useEditor> | null }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="flex gap-2 mb-2 flex-wrap">
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive("bold") ? "btn-active btn" : "btn"}
        title="Bold"
      >
        <b>B</b>
      </button>

      <button
        type="button"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={editor.isActive("italic") ? "btn-active btn" : "btn"}
        title="Italic"
      >
        <i>I</i>
      </button>

      <button
        type="button"
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={editor.isActive("underline") ? "btn-active btn" : "btn"}
        title="Underline"
      >
        <u>U</u>
      </button>

      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={editor.isActive("heading", { level: 1 }) ? "btn-active btn" : "btn"}
        title="Heading 1"
      >
        H1
      </button>

      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={editor.isActive("heading", { level: 2 }) ? "btn-active btn" : "btn"}
        title="Heading 2"
      >
        H2
      </button>

      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive("bulletList") ? "btn-active btn" : "btn"}
        title="Bullet List"
      >
        • List
      </button>

      <button
        type="button"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive("orderedList") ? "btn-active btn" : "btn"}
        title="Ordered List"
      >
        1. List
      </button>

      <button
        type="button"
        onClick={() => editor.chain().focus().undo().run()}
        title="Undo"
        className="btn"
      >
        ↺
      </button>

      <button
        type="button"
        onClick={() => editor.chain().focus().redo().run()}
        title="Redo"
        className="btn"
      >
        ↻
      </button>
    </div>
  );
};

const BlogCreate = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const editor = useEditor({
    extensions: [StarterKit, Underline],
    content: "<p></p>",
    editorProps: {
      attributes: {
        class:
          "prose prose-sm sm:prose lg:prose-lg xl:prose-2xl focus:outline-none min-h-[150px]",
      },
    },
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const title = ((form.title as unknown) as HTMLInputElement).value.trim();

    const description = editor?.getHTML();

    if (!title || !description || description === "<p></p>") {
      toast.error("Title and description are required");
      return;
    }

    const formData = new FormData();

    if (selectedImage) {
      formData.append("file", selectedImage);
    }

    formData.append(
      "data",
      JSON.stringify({
        title,
        description,
      })
    );

    try {
      const res = await createBlogs(formData);
      if (res?.success) {
        toast.success("Successfully created blog!");
        form.reset();
        editor?.commands.setContent("<p></p>");
        handleRemoveImage();
      } else {
        toast.error("Failed to create blog");
      }
    } catch (error) {
      toast.error("Something went wrong!");
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen mt-20 p-4">
      <form
        onSubmit={handleSubmit}
        className="p-6 rounded-2xl shadow-lg max-w-lg w-full space-y-4"
      >
        <h2 className="text-2xl font-semibold text-gray-700 text-center">
          Create Blog
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
            placeholder="Enter title"
            className="input input-bordered input-primary w-full"
            required
          />
        </div>

        <div>
          <label className="block text-gray-600 font-medium mb-1">
            Description
          </label>
  
          <MenuBar editor={editor} />

          <div className="border border-gray-300 rounded-md p-2 min-h-[150px]">
            {editor ? (
              <EditorContent editor={editor} />
            ) : (
              <p>Loading editor...</p>
            )}
          </div>
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

export default BlogCreate;
