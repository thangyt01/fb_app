import { useSelector } from 'react-redux';
import axios from '../configs/axios.config';
import { authSelector } from '../store/reducers/auth.reducer';

const PostLikeService = {
    action: async (userToken, postId) => {
        const configs = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userToken}`,
            },
        };

        const response = await axios.post(`/api/v1/postLike/action/${postId}`, {}, configs);
        return response;
    },
};

export default PostLikeService;
