import Hero from "./Hero";
import { Link } from "react-router";
import PostCardsList from "../../components/PostCardsList";
const posts = [
  {
    id: 17,
    title: "post by user xyz",
    excerpt: "Wed, 21 Oct 2015 18:27:50 GMT",
    content: "Content",
    tag: ["nodejs", "python"],
    createdAt: "2025-11-25T11:48:19.242Z",
    updatedAt: "2025-11-25T11:48:19.242Z",
    published: false,
    userId: 5,
    user: {
      username: "xyz",
      role: "USER",
    },
  },
  {
    id: 18,
    title: "post by user xyz",
    excerpt: "Wed, 21 Oct 2015 18:27:50 GMT",
    content: "Content",
    tag: ["nodejs", "python"],
    createdAt: "2025-12-21T09:36:10.051Z",
    updatedAt: "2025-12-21T09:36:10.051Z",
    published: false,
    userId: 5,
    user: {
      username: "xyz",
      role: "USER",
    },
  },
];

const HomePage = () => {
  return (
    <>
      <Hero />

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
            to="/register"
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
        <div>
          <PostCardsList posts={posts} />
        </div>
      </div>
    </>
  );
};
export default HomePage;
