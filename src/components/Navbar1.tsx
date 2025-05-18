"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
// import { signOut } from "next-auth/react"; // You can keep or remove if you don't use next-auth signOut
import { usePathname } from "next/navigation";
import { getCookie, deleteCookie } from "cookies-next";

interface User {
  email?: string;
  role?: string;
}

const Navbar1 = () => {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/blogs", label: "Blogs" },
    { href: "/contact", label: "Contact" },
    { href: "/experience", label: "Experience" },
    { href: "/dashboard", label: "Dashboard" },
  ];

  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [user, setUser] = useState<User | null>(null);

  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTheme = e.target.checked ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  // useEffect(() => {

  //   if (typeof window !== "undefined") {
  //     const localTheme = localStorage.getItem("theme") || "light";
  //     setTheme(localTheme as "light" | "dark");
  //     document.documentElement.setAttribute("data-theme", localTheme);

  //     const userCookie = getCookie("user");
  //     if (userCookie && typeof userCookie === "string") {
  //       try {
  //         setUser(JSON.parse(userCookie));

  //       // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //       } catch (error) {
  //         setUser(null);
  //       }
  //     } else {
  //       setUser(null);
  //     }
  //   }
  // }, []);

  useEffect(() => {
    const fetchUser = () => {
      const userCookie = getCookie("user");
      if (userCookie && typeof userCookie === "string") {
        try {
          setUser(JSON.parse(userCookie));
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
          setUser(null);
        }
      } else {
        setUser(null);
      }
    };

    fetchUser();

    window.addEventListener("userLoginStatusChanged", fetchUser);

    return () => {
      window.removeEventListener("userLoginStatusChanged", fetchUser);
    };
  }, []);

  const handleLogout = () => {
    deleteCookie("user");
    setUser(null);
    window.location.href = "/login";
  };

  const links = (
    <>
      <div className="space-x-3 gap-4  flex sm:flex-col lg:flex-row">
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`${
              pathname === href
                ? "text-blue-600 font-bold"
                : "text-white hover:text-teal-700"
            } ${label === "Home" ? "ml-3" : ""}`}
          >
            {label}
          </Link>
        ))}

        <section className="flex items-center">
          <label className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <input
              type="checkbox"
              onChange={handleToggle}
              checked={theme === "dark"}
              className="toggle theme-controller"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
        </section>
      </div>
    </>
  );

  return (
    <div className="navbar fixed z-10 w-full bg-black h-20 text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <button tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-black rounded-box mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        {/* Logo Link if needed */}
        {/* <Link href="/" className="btn btn-ghost text-xl">
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
        </Link> */}
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <a
          className="btn btn-neutral mr-3"
          href="https://drive.google.com/file/d/1OxYll_P_45jmlzNvZVTGKABn4ZTJRCP2/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>

        {user ? (
          <button onClick={handleLogout} className="btn btn-neutral ml-2">
            Logout
          </button>
        ) : (
          <Link href="/login">
            <button className="btn btn-neutral ml-2">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar1;
