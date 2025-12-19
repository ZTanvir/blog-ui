import { Link } from "react-router";

const LoginPage = () => {
  return (
    <div>
      <h3 className="text-center text-2xl font-bold">Welcome back</h3>
      <p className="mt-4 text-center">Sign in your account to continue</p>

      <form className="flex flex-col gap-4 rounded p-4 shadow-md">
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            className="rounded border border-gray-300 bg-gray-50 px-2 py-1 outline-sky-300"
            type="text"
            name="email"
            id="email"
            placeholder="example@gmail.com"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <input
            className="rounded border border-gray-300 bg-gray-50 px-2 py-1 outline-sky-300"
            type="text"
            name="password"
            id="password"
            placeholder="password"
          />
        </div>

        <button
          className="mt-8 rounded bg-sky-600 p-3 text-white duration-300 hover:cursor-pointer hover:bg-sky-500"
          type="submit"
        >
          Sign in
        </button>
        <p className="text-center">
          Don't have an account?{" "}
          <span className="text-sky-600">
            <Link to="/register">Sign up</Link>
          </span>
        </p>
      </form>
    </div>
  );
};
export default LoginPage;
