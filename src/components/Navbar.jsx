import { useState } from "react";
import { NavLink } from "react-router";
import { RxHamburgerMenu } from "react-icons/rx";
import blogLogo from "../assets/images/blogging.png";
import { UseUser } from "../context/UserContext";
import authServices from "../services/authServices";
import { useNavigate } from "react-router";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
  const { user, setUser, setToken } = UseUser();
  const userName = user && user.username;

  const handleSubmitLogout = async (e) => {
    e.preventDefault();
    const response = await authServices.logoutUser();
    if (response.status === 200) {
      setUser(null);
      setToken(null);
      navigate("/");
    }
  };

  return (
    <nav className="px-4 py-4">
      <div>
        <div className="flex items-center text-lg">
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
              About
            </NavLink>
            <NavLink
              to="/posts"
              className={({ isActive }) =>
                isActive ? "text-sky-400" : "text-gray-300"
              }
            >
              Posts
            </NavLink>

            {user ? (
              <>
                <NavLink
                  to="/write"
                  className={({ isActive }) =>
                    isActive ? "text-sky-400" : "text-gray-300"
                  }
                >
                  Write post
                </NavLink>

                <div className="group relative hover:cursor-pointer">
                  <span className="font-bold text-gray-300">
                    Welcome, {userName}
                  </span>
                  <div className="absolute hidden w-full rounded bg-gray-800 p-2 text-white group-hover:block group-hover:cursor-pointer">
                    <form onSubmit={handleSubmitLogout} className="text-center">
                      <button
                        className="w-full hover:cursor-pointer"
                        type="submit"
                      >
                        Logout
                      </button>
                    </form>
                  </div>
                </div>
              </>
            ) : (
              <>
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
              </>
            )}
          </div>
          <div
            onClick={() => setIsMobile(!isMobile)}
            className="hover:cursor-pointer sm:hidden"
          >
            <RxHamburgerMenu size={30} color="white" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        {isMobile && (
          <>
            <NavLink
              to="/"
              onClick={() => setIsMobile(false)}
              className={({ isActive }) =>
                isActive ? "mt-6 text-sky-400" : "mt-6 text-gray-300"
              }
            >
              Homepage
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setIsMobile(false)}
              className={({ isActive }) =>
                isActive ? "text-sky-400" : "text-gray-300"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/posts"
              onClick={() => setIsMobile(false)}
              className={({ isActive }) =>
                isActive ? "text-sky-400" : "text-gray-300"
              }
            >
              Posts
            </NavLink>
            {user ? (
              <>
                <NavLink
                  to="/write"
                  onClick={() => setIsMobile(false)}
                  className={({ isActive }) =>
                    isActive ? "text-sky-400" : "text-gray-300"
                  }
                >
                  Write post
                </NavLink>

                <NavLink
                  onClick={() => setIsMobile(false)}
                  className="text-gray-300"
                >
                  Welcome, {userName}
                </NavLink>

                <form onSubmit={handleSubmitLogout} className="text-gray-300">
                  <button
                    onClick={() => setIsMobile(false)}
                    className="w-full text-left"
                    type="submit"
                  >
                    Logout
                  </button>
                </form>
              </>
            ) : (
              <>
                <NavLink
                  to="/login"
                  onClick={() => setIsMobile(false)}
                  className={({ isActive }) =>
                    isActive ? "text-sky-400" : "text-gray-300"
                  }
                >
                  Login
                </NavLink>
                <NavLink
                  to="/register"
                  onClick={() => setIsMobile(false)}
                  className={({ isActive }) =>
                    isActive ? "text-sky-400" : "text-gray-300"
                  }
                >
                  Sign up
                </NavLink>
              </>
            )}
          </>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
