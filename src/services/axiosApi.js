import axios from "axios";
import { getStoredAuthToken } from "../utils/authToken";

const axiosApi = axios.create({
  baseURL: "http://localhost:8000/",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach token on refresh
axiosApi.interceptors.request.use(function (config) {
  const token = getStoredAuthToken();
  console.log("interceptor req,", token);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Refresh token after expire

export default axiosApi;
