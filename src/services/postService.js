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

const getSinglePost = async (postId) => {
  try {
    const response = await axiosApi.get(`api/posts/${postId}`)
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}


export default { getPosts, getLatestPosts, getSinglePost };
