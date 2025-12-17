import { useState } from "react";
import { NavLink } from "react-router";
import { RxHamburgerMenu } from "react-icons/rx";
import blogLogo from "../assets/images/blogging.png";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <nav className="px-4 py-4">
      <div>
        <div className="mb-6 flex items-center text-lg sm:mb-0">
          <div className="mr-auto flex text-4xl">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <div className="flex font-bold text-sky-400">
                <img
                  className="w-10 bg-white object-contain"
                  src={blogLogo}
                  alt="a browser tab where Blog text is displayed"
                />
                App
              </div>
            </NavLink>
          </div>
          <div className="hidden gap-8 sm:flex">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-sky-400" : "text-gray-300"
              }
            >
              Homepage
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-sky-400" : "text-gray-300"
              }
            >
              About me
            </NavLink>
            <NavLink
              to="/posts"
              className={({ isActive }) =>
                isActive ? "text-sky-400" : "text-gray-300"
              }
            >
              Posts
            </NavLink>
            <NavLink
              to="/post"
              className={({ isActive }) =>
                isActive ? "text-sky-400" : "text-gray-300"
              }
            >
              Write post
            </NavLink>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? "text-sky-400" : "text-gray-300"
              }
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className={({ isActive }) =>
                isActive ? "text-sky-400" : "text-gray-300"
              }
            >
              Sign up
            </NavLink>
          </div>
          <div
            onClick={() => setIsMobile(!isMobile)}
            className="hover:cursor-pointer sm:hidden"
          >
            <RxHamburgerMenu size={30} />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 sm:hidden">
        {isMobile && (
          <>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "font-bold" : "")}
            >
              Homepage
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "font-bold" : "")}
            >
              About me
            </NavLink>
            <NavLink
              to="/posts"
              className={({ isActive }) => (isActive ? "font-bold" : "")}
            >
              Posts
            </NavLink>
            <NavLink
              to="/post"
              className={({ isActive }) => (isActive ? "font-bold" : "")}
            >
              Write post
            </NavLink>
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? "font-bold" : "")}
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className={({ isActive }) => (isActive ? "font-bold" : "")}
            >
              Sign up
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
