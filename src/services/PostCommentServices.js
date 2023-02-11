import axios from '../configs/axios.config';

const PostCommentServices = {
    create: async (userToken, postId, content, commentAnswered) => {
        const configs = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userToken}`,
            },
        };

        const data = {
            content,
            commentAnswered,
        };

        const response = await axios.post(`/api/v1/postComment/create/${postId}`, data, configs);
        return response;
    },

    getAll: async (userToken, postId) => {
        const configs = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userToken}`,
            },
        };

        const response = await axios.get(`/api/v1/postComment/list/${postId}`, configs);
        return response;
    },
};

export default PostCommentServices;
