import { FaGithub } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="flex items-center justify-center gap-1 px-4 py-2">
      <p className="underline">Made by Zahirul Islam Tanvir</p>
      <div>
        <Link to="https://github.com/ZTanvir">
          <FaGithub size={25} />
        </Link>
      </div>
    </div>
  );
};
export default Footer;
