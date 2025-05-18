"use server";

const ExperienceDeleteFetch = async (id: string) => {
  const res = await fetch(`${process.env.BACKEND_URL}/experience/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to delete the experience");
  }

  const experienceData = await res.json();
  console.log(experienceData);
  return experienceData.message;
};

export default ExperienceDeleteFetch;
