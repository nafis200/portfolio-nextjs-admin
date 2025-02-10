"use client";
import "animate.css";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  return (
    <div className="">
      <div
        className="hero max-w-[490px] md:max-w-[1040px] lg:max-w-[1540px] mx-auto mb-10 mt-10 bg-no-repeat bg-cover"
        style={{ backgroundImage: "url('/web-development1.png')" }}
      >
        <div className="hero-overlay bg-opacity-70  flex flex-col md:flex-row items-center lg:p-32 md:px-8 px-4 py-8 md:py-2">
          <div className=" w-full md:w-[70%]">
            <h1 className="animate__animated animate__fadeInLeft">
              <span className="text-[40px] md:text-4xl lg:text-6xl font-bold text-white">
                Hi! I am Nafis Ahamed
              </span>
            </h1>
            <p className="text-[20px] md:text-2xl lg:text-4xl text-white">
              <Typewriter
                words={["Full Stack developer", "Backend Developer", "Frontend developer","Mern Stack developer"]}
                loop={5}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />{" "}
              | Competitive Programmer
            </p>
          </div>

          <div className="md:rounded-full mt-4 md:w-[30%] md:ml-[50px] lg:ml-32">
            <h1 className="animate__animated animate__zoomIn">
              <div className="w-40 h-48 lg:w-52 rounded-full">
                <Image
                  src="/imgonline-com-ua-Transparent-background-dCx8Jbt05t (1).jpg"
                  width={200}
                  height={200}
                  className="w-60 h-48 lg:h-56 rounded-full"
                  alt="Profile"
                />
              </div>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
