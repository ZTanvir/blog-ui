import { useState } from "react";
import { NavLink } from "react-router";
import { RxHamburgerMenu } from "react-icons/rx";
import blogLogo from "../assets/images/blogging.png";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <nav className="px-4 py-2">
      <div>
        <div className="mb-6 flex items-center text-lg">
          <div className="mr-auto flex text-4xl">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <div className="flex">
                <img
                  className="w-10 object-contain"
                  src={blogLogo}
                  alt="a browser tab where Blog text is displayed"
                />
                App
              </div>
            </NavLink>
          </div>
          <div className="hidden gap-8 sm:flex">
            <div>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "font-bold" : "")}
              >
                Homepage
              </NavLink>
            </div>
            <div>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "font-bold" : "")}
              >
                About me
              </NavLink>
            </div>
            <div>
              <NavLink
                to="/post"
                className={({ isActive }) => (isActive ? "font-bold" : "")}
              >
                Write post
              </NavLink>
            </div>
            <div>
              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? "font-bold" : "")}
              >
                Login
              </NavLink>
            </div>
            <div>
              <NavLink
                to="/register"
                className={({ isActive }) => (isActive ? "font-bold" : "")}
              >
                Sign up
              </NavLink>
            </div>
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
            <div>Homepage</div>
            <div>About me</div>
            <div>Write post</div>
            <div>Login</div>
            <div>Sign up</div>
          </>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
