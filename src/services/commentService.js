import axiosApi from "./axiosApi";

const getComments = async (postId) => {
    try {
        const response = await axiosApi.get(`api/comments/post/${postId}`)
        return response.data
    } catch (error) {
        console.error(error);
        throw error;
    }

}

export default { getComments }