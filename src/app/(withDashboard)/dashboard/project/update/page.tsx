

import UpdateProject from "@/components/UpdateProject/UpdateProject";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Update Project",
  description: "All Update Project",
};

const UpdateProjectPage = () => {
    return (
        <div className="lg:ml-[130px]">
          <UpdateProject/>
        </div>
    );
};

export default UpdateProjectPage;