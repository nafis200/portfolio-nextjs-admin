
"use server"
interface Blogs{
    name:string,
    email:string,
    message:string
}

const createMessage = async(data:Blogs) => {
    const res = await fetch(`${process.env.BACKEND_URL}/message`,{
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

export default createMessage;