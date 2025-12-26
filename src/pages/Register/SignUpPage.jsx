import { useState } from "react";
import { Link } from "react-router";
import { useNavigate } from "react-router";
import useSWRMutation from "swr/mutation";
import postService from "../../services/postService";


const SignUpPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { trigger, isMutating, error } = useSWRMutation(
    "api/auth/register",
    postService.sendFormData,
  );
  const navigate = useNavigate()

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      username,
      email,
      password,
      confirmPassword,
    };
    try {
      await trigger(formData);
      // user register successfully
      setTimeout(()=>{
        navigate("/login")
      },2000); 
    } catch (error) {
      console.error(error?.response?.data?.errors);
    }
  };

  const allErrors = error?.response?.data?.errors;

  // filter error msg from failed register api response
  const filterFormErrorMsg = (errorList = [], searchItem) => {
    const errorMsg = errorList.find((item) => item.path === searchItem);
    if (errorMsg) {
      return errorMsg.msg;
    } else {
      return null;
    }
  };

  return (
    <div>
      <h3 className="text-center text-2xl font-bold">Create an account</h3>
      <p className="mt-4 text-center">Join our community and start sharing</p>
   
      <form
        onSubmit={handleSignupSubmit}
        className="flex flex-col gap-4 rounded p-4 shadow-md"
      >
        <div className="flex flex-col gap-2">
          <label className="font-medium text-gray-700" htmlFor="username">
            Username:
          </label>
          <input
            className="rounded border border-gray-300 bg-gray-50 p-2 outline-sky-300"
            type="text"
            name="username"
            id="username"
            placeholder="Brynne Frost"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <p className="text-sm text-red-400">
            {allErrors && filterFormErrorMsg(allErrors, "username")}
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-medium text-gray-700" htmlFor="email">
            Email:
          </label>
          <input
            className="rounded border border-gray-300 bg-gray-50 p-2 outline-sky-300"
            type="email"
            name="email"
            id="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="text-sm text-red-400">
            {allErrors && filterFormErrorMsg(allErrors, "email")}
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-medium text-gray-700" htmlFor="password">
            Password:
          </label>
          <input
            className="rounded border border-gray-300 bg-gray-50 p-2 outline-sky-300"
            type="password"
            name="password"
            id="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="text-sm text-red-400">
            {allErrors && filterFormErrorMsg(allErrors, "password")}
          </p>

          {!allErrors && (
            // display this before send api request to api
            <span className="text-sm text-gray-600">
              Must be at least 6 characters
            </span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label
            className="font-medium text-gray-700"
            htmlFor="confirmPassword"
          >
            Confirm Password:
          </label>
          <input
            className="rounded border border-gray-300 bg-gray-50 p-2 outline-sky-300"
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <p className="text-sm text-red-400">
            {allErrors && filterFormErrorMsg(allErrors, "confirmPassword")}
          </p>
        </div>

        <button
          disabled={isMutating}
          className="mt-8 rounded bg-sky-600 p-3 text-white duration-300 hover:cursor-pointer hover:bg-sky-500 disabled:hover:cursor-not-allowed disabled:bg-sky-500"
          type="submit"
        >
          {isMutating ? "Submitting..." : "Sign up"}
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
