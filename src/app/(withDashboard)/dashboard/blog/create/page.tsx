
"use client"

import createBlogs from "@/utils/actions/createBlogs";

const BlogCreate = () => {

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    
    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      image: formData.get("image") as string,
      title: formData.get("title") as string,
      description: formData.get("description") as string,
    };

    try {
      const res = await createBlogs(data)
      
      if(res?.success){
        alert("successfully created")
      }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      alert("Something went error")
      throw new Error(err.message);
    } 

  };


  return (
    <div className="flex items-center justify-center min-h-screen  p-4">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-lg max-w-lg w-full space-y-4">
        <h2 className="text-2xl font-semibold text-gray-700 text-center">
          Create Blogs
        </h2>

        <div>
          <label className="block text-gray-600 font-medium">Image URL</label>
          <input
  type="text"
  placeholder="Enter image url"
  className="input input-bordered input-primary w-full mt-1"
  name="image"
  />
        </div>

        <div>
          <label className="block text-gray-600 font-medium mb-1">Title</label>
          <input type="text" placeholder="Enter title" className="input input-bordered input-primary w-full"
          name="title"
          />
        </div>

        <div>
          <label className="block text-gray-600 font-medium">Description</label>
          <textarea placeholder="Enter description" rows={4} className="textarea textarea-primary w-full mt-1" 
          name="description"
          />
        </div>

        <div className="flex justify-center">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default BlogCreate;
