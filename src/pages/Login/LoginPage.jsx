import { useState } from "react";
import { Link } from "react-router";
import useSWRMutation from "swr/mutation";
import { useNavigate } from "react-router";
import authServices from "../../services/authServices";
import helperFunction from "../../utils/helperFunction";
import { UseUser } from "../../context/UserContext";

const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { trigger, isMutating, error } = useSWRMutation("/api/auth/login", authServices.loginUser)
  const navigate = useNavigate()
  const { setUser, setToken } = UseUser()

  const handleLoginForm = async (event) => {
    event.preventDefault()
    const formData = {
      email,
      password
    }
    try {
      const result = await trigger(formData);
      setUser(result?.user)
      setToken(result?.accessToken)

      navigate("/")
    } catch (err) {
      console.error(err, error);
    }
  }

  const allErrors = error?.response?.data?.errors;

  return (
    <div>
      <h3 className="text-center text-2xl font-bold">Welcome back</h3>
      <p className="mt-4 text-center">Sign in your account to continue</p>
      <form onSubmit={handleLoginForm} className="flex flex-col gap-4 rounded p-4 shadow-md">
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            className="rounded border border-gray-300 bg-gray-50 p-2 outline-sky-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            id="email"
            placeholder="example@gmail.com"
          />
          <p className="text-sm text-red-400">
            {allErrors && helperFunction.filterFormErrorMsg(allErrors, "email")}
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <input
            className="rounded border border-gray-300 bg-gray-50 p-2 outline-sky-300"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            id="password"
            placeholder="password"
          />
          <p className="text-sm text-red-400">
            {allErrors && helperFunction.filterFormErrorMsg(allErrors, "password")}
          </p>
        </div>

        <button
          disabled={isMutating}
          className="mt-8 rounded bg-sky-600 p-3 text-white duration-300 hover:cursor-pointer hover:bg-sky-500 disabled:hover:cursor-not-allowed disabled:bg-sky-500"
          type="submit">
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
