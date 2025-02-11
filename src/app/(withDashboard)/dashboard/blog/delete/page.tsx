import Deleteblogs from '../../../../../components/allBlogs/Deleteblogs';

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "delteblogs",
  description: "Delete Blogs",
};


const DeleteBlogPage = () => {
    return (
        <div className="lg:ml-[130px]">
            <Deleteblogs/>
        </div>
    );
};

export default DeleteBlogPage;