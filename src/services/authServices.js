import axiosApi from "./axiosApi";

const registerUser = async (url, { arg }) => {
  const response = await axiosApi.post(url, arg);
  return response.data;
};

const loginUser = async (url, { arg }) => {
  const response = await axiosApi.post(url, arg)
  return response.data
}


export default { registerUser, loginUser }