import axiosApi from "./axiosApi";

const registerUser = async (url, { arg }) => {
  try {
    const response = await axiosApi.post(url, arg);
    return response.data;
  } catch (error) {
    if (error?.response?.data) {
      const errorMsg = error?.response?.data.errors;
      throw errorMsg;
    }
  }
};

const refreshToken = async (url, { arg }) => {
  const response = await axiosApi.post(url, arg);
  return response.data;
};

const loginUser = async (url, { arg }) => {
  const response = await axiosApi.post(url, arg);
  return response.data;
};

const logoutUser = async () => {
  const response = await axiosApi.post("api/auth/logout");
  return response;
};

export default { registerUser, refreshToken, loginUser, logoutUser };
