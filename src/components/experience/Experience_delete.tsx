"use client";

import React, { useEffect, useState, useTransition } from "react";
import ExperienceFetch from "@/utils/actions/ExperienceFetch";
import ExperienceDeleteFetch from "@/utils/actions/expeirencedelete";
import { toast } from "sonner";
import { Trash2 } from "lucide-react";

type Experience = {
  _id: string;
  subject: string;
  body: string;
};

const Experience_delete = () => {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await ExperienceFetch();
        setExperiences(data);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        toast.error("Failed to load experiences");
      }
    };
    fetchData();
  }, []);

  const handleDelete = (id: string) => {
    startTransition(async () => {
      try {
        await ExperienceDeleteFetch(id);
        setExperiences((prev) => prev.filter((exp) => exp._id !== id));
        toast.success("Experience deleted successfully!");
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        toast.error("Failed to delete experience!");
      }
    });
  };

  return (
    <div className="max-w-7xl mx-auto p-4 lg:ml-40 mt-32">
      <h2 className="text-2xl font-semibold mb-6">Experience List</h2>

      {experiences.length === 0 && (
        <p className="text-center text-gray-500">No experiences found.</p>
      )}

      <div className="grid grid-cols-1 gap-6">
        {experiences.map(({ _id, subject, body }) => (
          <div
            key={_id}
            className="p-6 bg-white rounded-lg shadow-md border border-gray-200 relative"
          >
            <button
              onClick={() => handleDelete(_id)}
              disabled={isPending}
              className="absolute top-4 right-4 text-red-600 hover:text-red-800"
              title="Delete"
            >
              <Trash2 className="w-5 h-5" />
            </button>
            <h3 className="text-xl font-bold mb-2">{subject}</h3>
            <p className="text-gray-700 whitespace-pre-line">{body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience_delete;
