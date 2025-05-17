/* eslint-disable react/jsx-key */
import { SiCodeforces, SiCodechef, SiLeetcode } from "react-icons/si";
import { GoCodeReview } from "react-icons/go";
import {
  FaCode,
  FaDatabase,
  FaTools,
  FaCogs
} from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { TbCodeDots } from "react-icons/tb";
import Link from "next/link";
import { Slide } from "react-awesome-reveal";
import {
  SiNextdotjs,
  SiRedux,
  SiAntdesign,
  SiTailwindcss,
  SiPrimereact,
} from "react-icons/si";
import { RiBracesLine } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";

import { FaReact } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { MdCode } from "react-icons/md";
import { FaRegFileCode } from "react-icons/fa";
import { SiNodedotjs, SiExpress } from "react-icons/si";
import { RiFileEditLine } from "react-icons/ri";

import { SiPostgresql } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { FaDatabase as FaMongodb } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";

import { SiGit } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiGooglechrome } from "react-icons/si";

const Skills = () => {
  return (
    <div className="my-12 mt-10 mx-5">
      <section className="text-center py-16">
        <h2 className="text-xl md:text-[40px] font-bold mb-6 hover:text-blue-600 transition-colors">
          Problem Solving Skills
        </h2>
        <h1 className="text-lg md:text-xl text-gray-700">
          I have solved over{" "}
          <span className="font-semibold text-blue-600">800+</span> problems on
          various online judges.
        </h1>
        <div className="flex justify-center items-center mt-4 space-x-6">
          <Link
            href="https://codeforces.com/profile/nafis2000"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiCodeforces className="text-4xl text-blue-600 hover:text-blue-800 transition-transform transform hover:scale-110" />
          </Link>
          <Link
            href="https://www.codechef.com/users/nafis2000"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiCodechef className="text-4xl text-red-600 hover:text-red-800 transition-transform transform hover:scale-110" />
          </Link>
          <Link
            href="https://atcoder.jp/users/nafis2000?contestType=algo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GoCodeReview className="text-4xl text-gray-800 hover:text-gray-900 transition-transform transform hover:scale-110" />
          </Link>
          <Link
            href="https://lightoj.com/user/nafis2001"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text-2xl font-semibold text-blue-800 hover:underline">
              LightOJ
            </span>
          </Link>
          <Link
            href="https://leetcode.com/u/nafis2000/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiLeetcode className="text-4xl text-blue-800 hover:text-orange-600 transition-transform transform hover:scale-110" />
          </Link>
        </div>
      </section>

      <h2 className="text-4xl font-bold text-center mb-8">
        My Technical Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Slide>
          <div className="skill-category bg-base-100 hover:bg-cyan-200 hover:text-black p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 md:h-[474px] lg:h-[390px]">
            <TbCodeDots className="text-4xl mb-4 text-blue-600" />
            <h4 className="text-xl font-bold mb-7">Languages</h4>
            <ul className="list-none grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <li className="flex flex-col items-center space-y-2">
                <MdCode className="text-4xl text-blue-600" />
                <span>C</span>
              </li>
              <li className="flex flex-col items-center space-y-2">
                <MdCode className="text-4xl text-blue-600" />
                <span>C++</span>
              </li>
              <li className="flex flex-col items-center space-y-2">
                <FaJsSquare className="text-4xl text-yellow-500" />
                <span>JavaScript</span>
              </li>
              <li className="flex flex-col items-center space-y-2">
                <SiTypescript className="text-4xl text-blue-600" />
                <span>TypeScript</span>
              </li>
            </ul>
          </div>
        </Slide>

        <Slide>
          <div className="skill-category bg-base-100 hover:bg-cyan-200 hover:text-black p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <FaCode className="text-4xl mb-4 text-blue-600" />
            <h4 className="text-xl font-bold mb-7">Frontend</h4>
            <ul className="list-none grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <li className="flex flex-col items-center space-y-2">
                <SiNextdotjs className="text-4xl text-gray-900" />
                <span>Next.js</span>
              </li>
              <li className="flex flex-col items-center space-y-2">
                <FaReact className="text-4xl text-blue-400" />
                <span>React</span>
              </li>
              <li className="flex flex-col items-center space-y-2">
                <SiRedux className="text-4xl text-purple-600" />
                <span>Redux</span>
              </li>
              <li className="flex flex-col items-center space-y-2">
                <SiAntdesign className="text-4xl text-red-500" />
                <span>Ant Design</span>
              </li>
              <li className="flex flex-col items-center space-y-2">
                <SiPrimereact className="text-4xl text-blue-500" />
                <span>PrimeReact</span>
              </li>
              <li className="flex flex-col items-center space-y-2">
                <SiTailwindcss className="text-4xl text-teal-400" />
                <span>Tailwind CSS</span>
              </li>
              <li className="flex flex-col items-center space-y-2">
                <RiBracesLine className="text-4xl text-black" />
                <span>ShadCN</span>
              </li>
              <li className="flex flex-col items-center space-y-2">
                <FaHtml5 className="text-4xl text-orange-500" />
                <span>HTML</span>
              </li>
            </ul>
          </div>
        </Slide>

        <Slide>
          <div className="skill-category bg-base-100 hover:bg-cyan-200 hover:text-black p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 md:h-[474px] lg:h-[390px]">
            <FaCogs className="text-4xl mb-4 text-blue-600" />
            <h4 className="text-xl font-bold mb-7">Backend</h4>
            <ul className="list-none grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <li className="flex flex-col items-center space-y-2">
                <SiNodedotjs className="text-4xl text-green-600" />
                <span>Node.js</span>
              </li>
              <li className="flex flex-col items-center space-y-2">
                <SiExpress className="text-4xl text-gray-700" />
                <span>Express.js</span>
              </li>
              <li className="flex flex-col items-center space-y-2">
                <FaRegFileCode className="text-4xl text-orange-500" />
                <span>MVC pattern</span>
              </li>
              <li className="flex flex-col items-center space-y-2">
                <RiFileEditLine className="text-4xl text-blue-500" />
                <span>Validation</span>
              </li>
            </ul>
          </div>
        </Slide>

        <Slide>
          <div className="skill-category bg-base-100 hover:bg-cyan-200 hover:text-black p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 md:h-[474px] lg:h-[390px]">
            <FaDatabase className="text-4xl mb-4 text-blue-600" />
            <h4 className="text-xl font-bold mb-7">Database</h4>
            <ul className="list-none grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <li className="flex flex-col items-center space-y-2">
                <SiPostgresql className="text-4xl text-blue-600" />
                <span>Postgresql</span>
              </li>
              <li className="flex flex-col items-center space-y-2">
                <SiPrisma className="text-4xl text-green-600" />
                <span>Prisma</span>
              </li>
              <li className="flex flex-col items-center space-y-2">
                <FaMongodb className="text-4xl text-green-700" />
                <span>Mongoose</span>
              </li>
              <li className="flex flex-col items-center space-y-2">
                <FaDatabase className="text-4xl text-green-600" />
                <span>MongoDB</span>
              </li>
              <li className="flex flex-col items-center space-y-2">
                <SiFirebase className="text-4xl text-orange-500" />
                <span>Firebase</span>
              </li>
            </ul>
          </div>
        </Slide>
        <Slide>
          <div className="skill-category bg-base-100 hover:bg-cyan-200 hover:text-black p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 md:h-[474px] lg:h-[390px]">
            <FaTools className="text-4xl mb-4 text-blue-600" />
            <h4 className="text-xl font-bold mb-7">Tools</h4>
            <ul className="list-none grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <li className="flex flex-col items-center space-y-2">
                <SiGithub className="text-4xl text-blue-500" />
                <span>GitHub</span>
              </li>
              <li className="flex flex-col items-center space-y-2">
                <SiGit className="text-4xl text-orange-600" />
                <span>Git</span>
              </li>
              <li className="flex flex-col items-center space-y-2">
                <SiGithub className="text-4xl text-black" />
                <span>GitHub</span>
              </li>
              <li className="flex flex-col items-center space-y-2">
                <SiGooglechrome className="text-4xl text-yellow-500" />
                <span>DevTools</span>
              </li>
              <li className="flex flex-col items-center space-y-2">
                <SiGooglechrome className="text-4xl text-blue-600" />
                <span>Browse</span>
              </li>
            </ul>
          </div>
        </Slide>

        <Slide>
          <div className="skill-category bg-base-100 hover:bg-cyan-200 hover:text-black p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 md:h-[474px] lg:h-[390px]">
            <GiSkills className="text-4xl mb-4 text-blue-600" />
            <h4 className="text-xl font-bold mb-2">Soft Skills</h4>
            <ul className="list-none">
              <li>Problem Solving</li>
              <li>Conversational English (comfortable)</li>
            </ul>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Skills;
