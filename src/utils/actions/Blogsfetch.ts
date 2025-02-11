"use server"

const Blogsfetch = async() => {
    const res = await fetch(`${process.env.BACKEND_URL}/blogs`, {
        method: "GET", 
        headers: {
            "Content-Type": "application/json"
        },
        cache: "no-store"
    });

    const projectData= await res.json();
    return projectData.data;
};

export default Blogsfetch;