import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import blogLogo from "../assets/images/blogging.png";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <nav className="px-4 py-2">
      <div>
        <div className="mb-6 flex items-center text-lg">
          <div className="mr-auto flex text-4xl">
            <img
              className="w-10 object-contain"
              src={blogLogo}
              alt="a browser tab where Blog text is displayed"
            />
            App
          </div>
          <div className="hidden gap-8 sm:flex">
            <div>Homepage</div>
            <div>About me</div>
            <div>Write post</div>
            <div>Login</div>
            <div>Sign up</div>
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
