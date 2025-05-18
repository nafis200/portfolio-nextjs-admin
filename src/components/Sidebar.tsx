"use client";
import { useState } from "react";
import Link from "next/link";
import {
  FaHome,
  FaBars,
  FaTimes,
  FaEdit,
  FaTrash,
  FaPlus,
  FaList,
  FaEnvelopeOpen,
} from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="lg:fixed">
      <button
        className="lg:hidden p-3 text-gray-700 fixed top-4 left-4 z-50 bg-white shadow-md rounded-md ml-10 mt-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
      </button>

      <div
        className={`bg-slate-100 rounded-xl fixed lg:relative top-0 left-0 w-64 mt-24 lg:mt-20 transition-transform duration-300 lg:translate-x-0 z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:block overflow-y-auto max-h-[calc(100vh-5rem)]`}
      >
        <ul className="space-y-2 p-4">
          <li>
            <Link
              href="/dashboard"
              className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
              onClick={() => setIsOpen(false)}
            >
              <FaHome className="h-5 w-5" />
              <span>Dashboard</span>
            </Link>
          </li>

          <li>
            <span className="text-gray-600 font-semibold">Blog Management</span>
            <ul className="space-y-2 pl-6">
              <li>
                <Link
                  href="/dashboard/blog/create"
                  className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
                  onClick={() => setIsOpen(false)}
                >
                  <FaPlus className="h-5 w-5" />
                  <span>Create Blog</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/blog"
                  className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
                  onClick={() => setIsOpen(false)}
                >
                  <FaList className="h-5 w-5" />
                  <span>View Blogs</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/blog/update"
                  className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
                  onClick={() => setIsOpen(false)}
                >
                  <FaEdit className="h-5 w-5" />
                  <span>Update Blog</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/blog/delete"
                  className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
                  onClick={() => setIsOpen(false)}
                >
                  <FaTrash className="h-5 w-5" />
                  <span>Delete Blog</span>
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <span className="text-gray-600 font-semibold">Project Management</span>
            <ul className="space-y-2 pl-6">
              <li>
                <Link
                  href="/dashboard/project/create"
                  className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
                  onClick={() => setIsOpen(false)}
                >
                  <FaPlus className="h-5 w-5" />
                  <span>Create Project</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/project"
                  className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
                  onClick={() => setIsOpen(false)}
                >
                  <FaList className="h-5 w-5" />
                  <span>View Projects</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/project/update"
                  className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
                  onClick={() => setIsOpen(false)}
                >
                  <FaEdit className="h-5 w-5" />
                  <span>Update Project</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/project/delete"
                  className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
                  onClick={() => setIsOpen(false)}
                >
                  <FaTrash className="h-5 w-5" />
                  <span>Delete Project</span>
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <span className="text-gray-600 font-semibold">Experience Management</span>
            <ul className="space-y-2 pl-6">
              <li>
                <Link
                  href="/dashboard/experience/create"
                  className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
                  onClick={() => setIsOpen(false)}
                >
                  <FaPlus className="h-5 w-5" />
                  <span>Create Experience</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/experience/delete"
                  className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
                  onClick={() => setIsOpen(false)}
                >
                  <FaTrash className="h-5 w-5" />
                  <span>Delete Experience</span>
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link
              href="/dashboard/message"
              className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
              onClick={() => setIsOpen(false)}
            >
              <FaEnvelopeOpen className="h-5 w-5" />
              <span>Message Seen</span>
            </Link>
          </li>
        </ul>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 lg:hidden z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
