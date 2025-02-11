import Singleproduct from "@/components/singleProductpage/Singleproduct";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Single Project",
    description: "singleProject"
  };

const ProjectDetailPage = async({params}:{
    params:Promise<{projectId:string}>,
}) => {
    const {projectId} = await params
    return (
        <div>
            <Singleproduct projectId={projectId}/>
        </div>
    );
};

export default ProjectDetailPage;