
"use server"
interface Blogs{
    image:string,
    title:string,
    description:string
}

const createBlogs = async(data:Blogs) => {
    const res = await fetch(`${process.env.BACKEND_URL}/blogs`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
        cache: "no-store"
    });

    const userInfo = await res.json();
    console.log(userInfo)
    return userInfo;
};

export default createBlogs;