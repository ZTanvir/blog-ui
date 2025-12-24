import { Link } from "react-router";

const SignUpPage = () => {
  return (
    <div>
      <h3 className="text-center text-2xl font-bold">Create an account</h3>
      <p className="mt-4 text-center">Join our community and start sharing</p>

      <form className="flex flex-col gap-4 rounded p-4 shadow-md">
        <div className="flex flex-col gap-2">
          <label htmlFor="username">Username</label>
          <input
            className="rounded border border-gray-300 bg-gray-50 p-2 outline-sky-300"
            type="text"
            name="username"
            id="username"
            placeholder="Brynne Frost"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            className="rounded border border-gray-300 bg-gray-50 px-2 py-1 outline-sky-300"
            type="email"
            name="email"
            id="email"
            placeholder="example@gmail.com"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <input
            className="rounded border border-gray-300 bg-gray-50 px-2 py-1 outline-sky-300"
            type="password"
            name="password"
            id="password"
            placeholder="password"
          />
          <span className="text-sm text-gray-600">
            Must be at least 6 characters
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            className="rounded border border-gray-300 bg-gray-50 px-2 py-1 outline-sky-300"
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="confirm password"
          />
        </div>

        <button
          className="mt-8 rounded bg-sky-600 p-3 text-white duration-300 hover:cursor-pointer hover:bg-sky-500"
          type="submit"
        >
          Sign up
        </button>
        <p className="text-center">
          Already have an account?{" "}
          <span className="text-sky-600">
            <Link to="/login">Sign in</Link>
          </span>
        </p>
      </form>
    </div>
  );
};
export default SignUpPage;
