
import AllProject from '@/components/allprojects/Allprojects';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "All Products page",
    description: "My All products pages",
  };

const Projects = () => {
    return (
        <div className=''>
           <AllProject/> 
        </div>
    );
};

export default Projects;