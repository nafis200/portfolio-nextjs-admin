
"use server"
const Projectdeletefetch = async (id: string) => {
  

    const res = await fetch(`${process.env.BACKEND_URL}/project/${id}`, {
        method: "DELETE", 
        headers: {
            "Content-Type": "application/json",
        },
        cache: "no-store"
    });

    if (!res.ok) {
        throw new Error("Failed to delete the blog");
    }

    const blogData = await res.json();
    console.log(blogData);
    return blogData.message; 
};

export default Projectdeletefetch;
