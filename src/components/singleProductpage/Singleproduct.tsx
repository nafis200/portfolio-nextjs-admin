/* eslint-disable react/jsx-key */
"use client";

import projectUser from "@/utils/actions/projectUser";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
type ProjectData = {
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

const Singleproduct = ({ projectId }: { projectId: string }) => {
  const [project, setProject] = useState<ProjectData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getProject = async () => {
      setLoading(true);
      const data = await projectUser();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const singleData = data.filter((da: any) => da._id === projectId);
      setProject(singleData);
      setLoading(false);
    };

    getProject();
  }, []);

  if (loading) return <p>Loading project...</p>;

  

  return (
    <div>
      <h1>..</h1>

      <div className="container mx-auto p-6 flex flex-col items-center mt-10">
        {project?.map((proj,index) => (
          <div key={index} className="max-w-4xl w-full  rounded-2xl p-6">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <Image
                src={proj?.image}
                alt="BloodBridge Project Screenshot"
                width={500}
                height={300}
                className="rounded-lg w-full md:w-1/2"
              />
              <div className="md:w-1/2">
                <h1 className="text-3xl font-bold">
                  {proj?.title}
                </h1>
              </div>
            </div>

            <div className="mt-6">
              <h2 className="text-xl font-semibold">Features:</h2>
              <ul className="list-disc list-inside  mt-2 space-y-2">
                {proj?.description?.map((pro, index) => (
                  <li key={index}>{pro}</li>
                ))}
              </ul>
            </div>

            <p className="mb-2 mt-5">
              <strong>Technology:</strong>
            </p>
            <p>{proj.technologies.join(", ")}</p>

            <div className="text-center flex justify-center space-x-4 mt-4">
              <Link
                href={proj?.project_link}
                className="text-blue-500 hover:text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaExternalLinkAlt className="text-2xl" />
              </Link>
              <Link
                href={proj?.github_link}
                className="text-blue-500 hover:text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-2xl" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Singleproduct;
