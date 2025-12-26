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

const getLatestPosts = async (limit, order) => {
  try {
    const response = await axiosApi.get(
      `api/posts?sort=date&limit=${limit}&order=${order}`,
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const sendFormData = async (url, { arg }) => {
  const response = await axiosApi.post(url, arg);
  return response.data;
};

export default { getPosts, getLatestPosts, sendFormData };
