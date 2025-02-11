"use client"
import Blogsfetch from "@/utils/actions/Blogsfetch";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Zoom } from "react-awesome-reveal";
import Blogdeletefetch from "@/utils/actions/Blogdeletefetch";


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

const Deleteblogs = () => {
  const [project, setProject] = useState<ProjectData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  
  useEffect(() => {
    const getProject = async () => {
      setLoading(true);
      const data = await Blogsfetch();
      setProject(data);
      setLoading(false);
    };

    getProject();
  }, []);

  if (loading) return <p>Loading project...</p>;

  const handleDelete = async (id: string) => {
    try {
      const deleteData = await Blogdeletefetch(id);

      if (deleteData) {
        alert("Data deleted successfully");
        setProject(prevState => prevState.filter(proj => proj._id !== id));
      } else {
        alert("Something went wrong");
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      alert("Error: ");
    }
  };

  return (
    <div>
      <h1>..</h1>
      <h1 className="mt-20">..</h1>
      {project?.map((proj, index) => (
        <Zoom key={index}>
          <div className="w-full mx-auto shadow-lg rounded-lg overflow-hidden p-4 flex flex-col md:flex-row items-center gap-20 space-y-5">
            <Image
              src={proj?.image}
              alt={proj?.title}
              width={150}
              height={150}
              className="w-36 h-36 object-cover rounded-md"
            />
            <div className="flex-1">
              <h2 className="text-xl font-bold">{proj.title}</h2>
              <p className="mt-2 text-sm">{proj.description}</p>
              <button onClick={() => handleDelete(proj?._id)} className="btn btn-warning mt-2">Delete</button>
            </div>
          </div>
        </Zoom>
      ))}
    </div>
  );
};

export default Deleteblogs;
