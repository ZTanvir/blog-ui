import { Link } from "react-router";
import Hero from "./Hero";
import LatestPosts from "../../components/LatestPosts";

const HomePage = () => {
  return (
    <>
      <Hero />

      <LatestPosts limit={6} order={"desc"} />

      <div className="bg-gray-100 px-4 py-8">
        <h2 className="mb-4 text-center text-4xl font-bold tracking-wide text-gray-900">
          Ready to start your blogging journey?
        </h2>
        <p className="mb-6 text-center tracking-wide text-gray-600">
          Join our community of writers and share your knowledge, ideas, and
          stories with readers around the world.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6">
          <Link
            className="rounded-lg bg-sky-600 px-8 py-3 text-lg text-white duration-200 hover:bg-sky-900"
            to="/write"
          >
            Start Writing
          </Link>

          <Link
            className="rounded-lg border bg-gray-100 px-8 py-3 text-lg text-gray-900 duration-200 hover:bg-gray-300"
            to="/about"
          >
            Learn More
          </Link>
        </div>
      </div>
    </>
  );
};
export default HomePage;
