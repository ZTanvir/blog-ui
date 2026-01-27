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

const addComment = async (url, { arg }) => {
    const response = await axiosApi.post(url, arg)
    return response.data
}

export default { getComments, addComment }