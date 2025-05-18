"use client";

import createExperience from "@/utils/actions/CreateExperience";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

type ExperiencePayload = {
  subject: string;
  body: string;
};

const Experience_create = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ExperiencePayload>();

  const onSubmit = async (data: ExperiencePayload) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const res = await createExperience(data);
      toast.success("Experience created successfully!");
      reset();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
    } catch (error: any) {
      toast.error("Failed to create experience!");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-8 mt-40 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
        Create Experience
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block mb-2 font-medium text-gray-700">Subject</label>
          <input
            type="text"
            {...register("subject", { required: "Subject is required" })}
            className={`w-full border rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
              errors.subject ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter subject"
          />
          {errors.subject && (
            <p className="text-red-600 text-sm mt-1">{errors.subject.message}</p>
          )}
        </div>
        <div>
          <label className="block mb-2 font-medium text-gray-700">Body</label>
          <textarea
            rows={5}
            {...register("body", { required: "Body is required" })}
            className={`w-full border rounded px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
              errors.body ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Write your experience here..."
          />
          {errors.body && (
            <p className="text-red-600 text-sm mt-1">{errors.body.message}</p>
          )}
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Experience_create;
