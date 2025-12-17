import { Link } from "react-router";
import laptopNoteImg from "../../assets/images/laptop-note.jpg";

const Hero = () => {
  return (
    <section>
      <div className="grid grid-cols-1 bg-linear-to-r from-gray-800 to-gray-900 md:grid-cols-2">
        <div className="my-4 self-center justify-self-center p-4 sm:my-8">
          <h1 className="mb-8 text-center text-4xl font-bold tracking-wide text-gray-300 sm:text-6xl">
            Welcome to BlogApp
          </h1>
          <p className="mb-8 text-center tracking-wide text-white md:text-left">
            Hi there! My name is Zahirul Islam Tanvir, and this is my blog:
            written by an aspiring web developer, for other aspiring developers.
            Feel free to read all about my insights, experiences, tips and
            reflections!
          </p>
          <div className="flex items-center justify-center gap-6">
            <Link
              className="rounded-lg border px-8 py-3 text-lg text-white duration-200 hover:bg-white hover:text-gray-700"
              to="/login"
            >
              Login
            </Link>
            <Link
              className="rounded-lg bg-sky-600 px-8 py-3 text-lg text-white duration-200 hover:bg-sky-900"
              to="/register"
            >
              Sign up
            </Link>
          </div>
        </div>
        <img
          className="h-full object-cover"
          src={laptopNoteImg}
          alt="laptop image with mobile and written note beside it."
        />
      </div>
    </section>
  );
};
export default Hero;
