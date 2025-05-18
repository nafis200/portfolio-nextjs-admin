"use server";

const createBlogs = async (formData: FormData) => {
  const res = await fetch(`${process.env.BACKEND_URL}/blogs`, {
    method: "POST",
    body: formData,
    cache: "no-store",
  });

  const userInfo = await res.json();
  console.log(userInfo);
  return userInfo;
};

export default createBlogs;
