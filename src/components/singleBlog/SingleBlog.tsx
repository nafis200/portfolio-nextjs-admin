"use client";

import Blogsfetch from "@/utils/actions/Blogsfetch";
import { useEffect, useState } from "react";
import Image from "next/image";
import DOMPurify from "dompurify";

interface Blog {
  _id: string;
  image: string;
  title: string;
  description: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const SingleBlog = ({ blogId }: { blogId: string }) => {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getBlog = async () => {
      setLoading(true);
      try {
        const data = await Blogsfetch();
        const singleBlog = data.find((da: Blog) => da._id === blogId) || null;
        setBlog(singleBlog);
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
      setLoading(false);
    };

    getBlog();
  }, [blogId]);

  if (loading) return <p>Loading blog...</p>;
  if (!blog) return <p>Blog not found.</p>;

  return (
    <>
      <h1>.</h1>
      <h1 className="mt-20">.</h1>
      <div className="w-full mx-auto shadow-lg rounded-lg overflow-hidden p-4 flex flex-col md:flex-row items-center gap-10 space-y-5">
        <Image
          src={blog.image}
          alt={blog.title}
          width={150}
          height={150}
          className="w-36 h-36 object-cover rounded-md"
        />
        <div className="flex-1">
          <h2 className="text-xl font-bold">{blog.title}</h2>
          <div
            className="mt-2 text-sm prose"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(blog.description),
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
