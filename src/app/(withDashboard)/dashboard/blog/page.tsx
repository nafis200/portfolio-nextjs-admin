import Allblogs from "@/components/allBlogs/Allblogs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard/blogs",
  description: "All Blogs",
};




const DashboardBlogs = () => {
    return (
        <div className="lg:ml-[130px]">
            <Allblogs/>
        </div>
    );
};

export default DashboardBlogs;