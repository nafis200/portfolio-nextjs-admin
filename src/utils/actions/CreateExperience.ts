"use server";

type ExperiencePayload = {
  subject: string;
  body: string;
};

const createExperience = async (data: ExperiencePayload) => {
  const res = await fetch(`${process.env.BACKEND_URL}/experience`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to create experience");
  }

  const experienceInfo = await res.json();
  console.log(experienceInfo);
  return experienceInfo;
};

export default createExperience;
