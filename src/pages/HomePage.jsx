import { Link } from "react-router";
import laptopNoteImg from "../assets/images/laptop-note.jpg";

const HomePage = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="self-center justify-self-center p-4">
          <h1 className="mb-4 text-center text-4xl">Welcome to BlogApp</h1>
          <p className="mb-4 text-center md:text-left">
            Hi there! My name is Zahirul Islam Tanvir, and this is my blog:
            written by an aspiring web developer, for other aspiring developers.
            Feel free to read all about my insights, experiences, tips and
            reflections!
          </p>
          <div className="flex items-center justify-center gap-2">
            <button className="rounded-lg px-4 py-2">Sign up now!</button>
            <Link className="hover:underline" to="/about">
              Read about me
            </Link>
          </div>
        </div>
        <img
          src={laptopNoteImg}
          alt="laptop image with mobile and written note beside it."
        />
      </div>
    </div>
  );
};
export default HomePage;
