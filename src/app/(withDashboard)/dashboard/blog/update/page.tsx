
import AllUpdatePage from '@/components/Update/AllUpdatePage';
import React from 'react';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Update Blogs",
  description: "All Update Blogs",
};

const UpdateBlogPage = () => {
    return (
        <div className="lg:ml-[130px]">
            <AllUpdatePage/>
        </div>
    );
};

export default UpdateBlogPage;