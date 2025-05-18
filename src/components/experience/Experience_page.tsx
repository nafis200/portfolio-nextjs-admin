'use client';

import ExperienceFetch from '@/utils/actions/ExperienceFetch';
import React, { useEffect, useState } from 'react';


type Experience = {
  subject: string;
  body: string;
  _id?: string;
};

const ExperiencePage = () => {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await ExperienceFetch();
      setExperiences(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center mt-10 text-gray-600">Loading experiences...</div>;
  }

  return (
    <div className="min-h-screen py-10 px-4 md:px-16">
      <h1 className="text-3xl font-bold text-center mt-20 mb-10 text-gray-800">My Experiences</h1>
      <div className="flex flex-col gap-8">
        {experiences.map((exp, index) => (
          <div
            key={exp._id || index}
            className="shadow-xl rounded-2xl p-6 md:p-10 w-full transition hover:shadow-2xl"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">{exp.subject}</h2>
            <p className="text-gray-600 text-base leading-relaxed whitespace-pre-line">{exp.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperiencePage;
