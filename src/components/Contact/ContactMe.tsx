"use client";

import {
  FaLinkedinIn,
  FaGithub,
  FaWhatsapp,
  FaTelegramPlane,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import createMessage from "@/utils/actions/createMessage";
import { toast } from "sonner";


const ContactMe = () => {
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
        toast.success("Successfully sent Message");
      }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      toast.error("EMail subject body must be need");
      throw new Error(err.message);
    }
  };

  return (
    <div className="min-h-screen py-16 px-6 flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 mt-20 gap-10 max-w-6xl w-full">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold mb-6">Contact Information</h2>

          <div className="flex items-center gap-5">
            <FaMapMarkerAlt size={30} />
            <p className="text-lg">Dhaka, Bangladesh</p>
          </div>

          <div className="flex items-center gap-5">
            <FaPhoneAlt size={30} />
            <p className="text-lg">+8801922208141</p>
          </div>

          <div className="flex items-center gap-5">
            <FaWhatsapp size={30} />
            <p className="text-lg">+8801744136454</p>
          </div>

          <div className="flex items-center gap-5">
            <FaTelegramPlane size={30} />
            <p className="text-lg">+8801922208141</p>
          </div>

          <div className="flex gap-5 mt-8">
            <a
              href="https://www.linkedin.com/in/n-ahamed"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-blue-700 transition"
            >
              <FaLinkedinIn size={25} />
            </a>
            <a
              href="https://github.com/nafis200"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition"
            >
              <FaGithub size={25} />
            </a>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl shadow-xl p-8 space-y-6"
        >
          <h2 className="text-2xl font-bold text-center text-gray-800">
            Send a Message
          </h2>

          <div>
            <label htmlFor="name" className="block text-gray-700 mb-1 font-medium">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 mb-1 font-medium">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Your email"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-gray-700 mb-1 font-medium">
              Message
            </label>
            <textarea
              id="description"
              name="description"
              rows={4}
              placeholder="Write your message..."
              className="textarea textarea-bordered w-full"
              required
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="btn btn-primary px-8"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
