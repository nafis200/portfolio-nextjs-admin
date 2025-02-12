"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";


const LoginPage = () => {
  return (
    <div className="w-[90%] mx-auto">
      <h1 className="text-center text-4xl mb-5 font-bold">
        Login <span className="text-teal-500">Here</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
        <div>
          <Image
            src="https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg?t=st=1710130697~exp=1710134297~hmac=f1b21d9c1823a0657d339c256a1c4ad8301168480e35b35aeba5106568a21010&w=740"
            width={500}
            height={200}
            alt="login page"
            className="w-full h-auto"
          />
        </div>

        <div className="w-[80%] mx-auto bg-white p-6 shadow-lg rounded-lg">
          <p className="text-center mt-6 text-sm text-gray-500">
            Sign In Using
          </p>

          {/* Social Login Buttons */}
          <div className="flex justify-center gap-4 mt-4">
            <button
              className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full shadow-md hover:bg-gray-200"
              onClick={() => signIn("google", { callbackUrl: "https://portfolio-frontend-gamma-weld.vercel.app//dashboard" })}
            >
              <Image
                src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
                width={30}
                height={30}
                alt="Google logo"
              />
            </button>
            <button
              className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full shadow-md hover:bg-gray-200"
              onClick={() => signIn("github", { callbackUrl: "https://portfolio-frontend-gamma-weld.vercel.app//dashboard" })}
            >
              <Image
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                width={25}
                height={25}
                alt="GitHub logo"
              />
            </button>
          </div>

          <p className="text-center mt-4 text-sm text-gray-600">
            Don&apos;t have an account? {" "}
            <Link href="#" className="text-teal-500 hover:underline">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
