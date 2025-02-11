


"use client";

import createMessage from "@/utils/actions/createMessage";

const ContactMe  = () => {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("description") as string,
    };

    try {
      const res = await createMessage(data);

      if (res?.success) {
        alert("successfully sent Message");
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      alert("Something went error");
      throw new Error(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen  p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl shadow-lg max-w-lg w-full space-y-4"
      >
        <h2 className="text-2xl font-semibold text-gray-700 text-center">
          Sent message
        </h2>

        <div>
          <label className="block text-gray-600 font-medium">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="input input-bordered input-primary w-full mt-1"
            name="name"
          />
        </div>

        <div>
          <label className="block text-gray-600 font-medium mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter Your email"
            className="input input-bordered input-primary w-full"
            name="email"
          />
        </div>

        <div>
          <label className="block text-gray-600 font-medium">Description</label>
          <textarea
            placeholder="Please text your message"
            rows={4}
            className="textarea textarea-primary w-full mt-1"
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

export default ContactMe ;




