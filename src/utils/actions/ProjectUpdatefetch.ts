"use server";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ProjectUpdatefetch = async (id: string, updatedData:any) => {
    try {
        const res = await fetch(`${process.env.BACKEND_URL}/project/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedData),
            cache: "no-store",
        });

        const blogData = await res.json();
        return blogData;
    } catch (error) {
        throw error;
    }
};

export default ProjectUpdatefetch;
