

"use server"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const createProject = async(data:any) => {
    console.log(data)
    const res = await fetch(`${process.env.BACKEND_URL}/project`,{
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

export default createProject;