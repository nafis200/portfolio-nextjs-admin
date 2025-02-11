import Allblogs from "@/components/allBlogs/Allblogs";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "All Blogs page",
    description: "My All Blogs pages",
  };


const Blogs = () => {
    return (
        <div>
            <Allblogs/>
        </div>
    );
};

export default Blogs;