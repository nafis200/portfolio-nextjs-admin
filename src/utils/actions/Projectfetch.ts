
"use server"

const Projectfetch = async() => {
    const res = await fetch(`${process.env.BACKEND_URL}/project`, {
        method: "GET", 
        headers: {
            "Content-Type": "application/json"
        },
        cache: "no-store"
    });

    const projectData= await res.json();
    return projectData.data;
};

export default Projectfetch;