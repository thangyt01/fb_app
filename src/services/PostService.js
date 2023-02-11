import { useSelector } from 'react-redux';
import axios from '../configs/axios.config';
import { authSelector } from '../store/reducers/auth.reducer';

const PostService = {
    create: async (described, images, videos, userToken) => {
        const configs = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userToken}`,
            },
        };

        const data = {
            described,
            images,
            videos,
        };

        const response = await axios.post('/api/v1/posts/create', data, configs);
        return response;
    },
    getAll: async (userToken, existedPosts) => {
        const configs = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userToken}`,
            },
        };

        const data = {
            existedPosts: existedPosts,
        };

        const response = await axios.post('/api/v1/posts/list', data, configs);
        return response;
    },
};

export default PostService;
