import SingleUpdate from "@/components/Update/SingleUpdate";




const SingleUpdates = async({params}:{
    params:Promise<{update:string}>,
}) => {
    const {update} = await params
    return (
        <div>
            <SingleUpdate id={update}/>
        </div>
    );
};

export default SingleUpdates;