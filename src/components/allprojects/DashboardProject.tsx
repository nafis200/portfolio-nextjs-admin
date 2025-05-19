


/* eslint-disable react/jsx-key */
"use client";
import projectUser from "@/utils/actions/projectUser";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Fade, Zoom } from "react-awesome-reveal";
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

const DashboardProject = () => {
  const [project, setProject] = useState<ProjectData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getProject = async () => {
      setLoading(true);
      const data = await projectUser();
      setProject(data);
      setLoading(false);
    };

    getProject();
  }, []);

  if (loading) return <p>Loading project...</p>;

  return (
    <div className="section projects-section mx-4 md:mx-10 lg:mx-14 mb-20">
      <Fade>
        
        <h2 className="hover:text-blue-600 text-xl text-center md:text-[40px] font-bold mb-10">
          Projects
        </h2>
      </Fade>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-20 auto-rows-fr">
        {project?.map((proj) => (
          <Zoom key={proj._id}>
            <div className="skill-category bg-base-100 border-2 border-blue-400 hover:border-cyan-300 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:shadow-cyan-200 transition-shadow duration-300 flex flex-col h-full">
              <div className="project-image mb-4">
                <Image
                  src={proj.image}
                  alt="Project Image"
                  width={400}
                  height={300}
                  className="rounded-lg"
                />
              </div>

              <h4 className="text-xl font-bold mb-2">
                {proj.title}
              </h4>
              <p className="mb-2">
                <strong>Technology:</strong>
              </p>
              <p>{proj.technologies.join(", ")}</p>
              <div className="text-center flex justify-center space-x-4 mt-4">
                <Link
                  href={proj.project_link}
                  className="text-blue-500 hover:text-blue-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt className="text-2xl" />
                </Link>
                <Link
                  href={proj.github_link}
                  className="text-blue-500 hover:text-blue-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-2xl" />
                </Link>
                <Link
                  href={`${`projects/${proj._id}`}`}
                  className="text-blue-500 hover:text-blue-700"
                >
                  Description
                </Link>
              </div>
            </div>
          </Zoom>
        ))}
      </div>
    </div>
  );
};

export default DashboardProject;
