"use client";

import { useForm } from "react-hook-form";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { loginUser } from "@/utils/actions/CreateLogin";


type LoginFormInputs = {
  email: string;
  password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormInputs>();

  const router = useRouter();

  const onSubmit = async (data: LoginFormInputs) => {
    const res = await loginUser(data);

    if (!res.success) {
      toast.error(res.message || "Login failed");
      return;
    }

    const { role } = res.data.jwtPayload;

    if (role === "admin") {
      toast.success("Welcome Admin!");
      window.dispatchEvent(new Event("userLoginStatusChanged"));
      setTimeout(() => {
        router.push("/dashboard");
      }, 1000);
    } else {
      toast.error("You are not an admin");
    }
  };

  return (
    <div className="w-[90%] max-w-5xl mx-auto py-10">
      <h1 className="text-center mt-20 text-4xl mb-8 font-bold">
        Login{" "}
        <span className="text-teal-500">Only for admin not general user</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <Image
            src="https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg"
            width={500}
            height={300}
            alt="Login illustration"
            className="w-full h-auto"
          />
        </div>

        <div className="p-8 rounded-lg shadow-lg w-full">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-teal-500"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label className="block mb-1 font-medium">Password</label>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-teal-500"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-teal-500 text-white py-2 rounded-md transition ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:bg-teal-600"
              }`}
            >
              {isSubmitting ? "Logging in..." : "Login"}
            </button>
          </form>

          <p className="text-center mt-6 text-sm text-gray-600">
            Don&apos;t have an account?{" "}
            <Link href="#" className="text-teal-500 hover:underline">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
