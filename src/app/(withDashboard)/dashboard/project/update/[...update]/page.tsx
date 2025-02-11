import UpdateBlogProject from "@/components/UpdateProject/UpdateBlogProject";





const SingleProjectUpdatePage = async({params}:{
    params:Promise<{update:string}>,
}) => {
    const {update} = await params
    return (
        <div className="lg:ml-[130px]">
            <UpdateBlogProject id={update}/>
        </div>
    );
};

export default SingleProjectUpdatePage;