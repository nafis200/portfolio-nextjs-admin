"use server";

const BlogUpdateFetch = async (id: string, updatedData: { image?: string; title?: string; description?: string }) => {
    try {
        const res = await fetch(`${process.env.BACKEND_URL}/blogs/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedData),
            cache: "no-store",
        });

        const blogData = await res.json();
        console.log("Updated Blog:", blogData);
        return blogData;
    } catch (error) {
        console.error("Error updating blog:", error);
        throw error;
    }
};

export default BlogUpdateFetch;
