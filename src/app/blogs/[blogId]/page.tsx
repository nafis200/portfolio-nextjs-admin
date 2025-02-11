

import type { Metadata } from "next";
import SingleBlog from '@/components/singleBlog/SingleBlog';

export const metadata: Metadata = {
    title: "Single Blogs page",
    description: "My Blogs pages",
  };
const SingleBlogPage = async({params}:{
    params:Promise<{blogId:string}>,
}) => {
    const {blogId} = await params
    return (
        <div>
            <SingleBlog blogId={blogId}/>
        </div>
    );
};

export default SingleBlogPage;