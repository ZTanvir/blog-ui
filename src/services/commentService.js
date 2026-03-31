import axiosApi from "./axiosApi";

const getComments = async (postId) => {
  try {
    const response = await axiosApi.get(`api/comments/post/${postId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const addComment = async (url, { arg }) => {
  try {
    const response = await axiosApi.post(url, arg);
    return response.data;
  } catch (error) {
    const errorMessage =
      error?.response?.data || "An unexpected error occurred";
    throw errorMessage;
  }
};

const deleteComment = async (url, { arg }) => {
  try {
    const response = await axiosApi.delete(url, arg);
    return response.data;
  } catch (error) {
    const errorMessage =
      error?.response?.data || "An unexpected error occurred";
    throw errorMessage;
  }
};

export default { getComments, addComment, deleteComment };
