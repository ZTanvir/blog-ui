import axiosApi from "./axiosApi";

const getPosts = async () => {
  try {
    const response = await axiosApi.get("api/posts");
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
export default { getPosts };
