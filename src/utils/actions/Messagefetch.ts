

"use server"

const Messagefetch = async() => {
    const res = await fetch(`${process.env.BACKEND_URL}/message`, {
        method: "GET", 
        headers: {
            "Content-Type": "application/json"
        },
        cache: "no-store"
    });

    const projectData= await res.json();
    return projectData.data;
};

export default Messagefetch;