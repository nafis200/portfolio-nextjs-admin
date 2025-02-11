

import DashboardProject from "@/components/allprojects/DashboardProject";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard Project",
  description: "Project",
};
const DashboardProjectPage = () => {
    return (
        <div className="lg:ml-[130px]">
            <DashboardProject/>
        </div>
    );
};

export default DashboardProjectPage;