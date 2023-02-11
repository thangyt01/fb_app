import axios from '../configs/axios.config';

const UserService = {
    show: async (userToken, user_id) => {
        const configs = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userToken}`,
            },
        };

        const response = await axios.get('/api/v1/users/show/' + user_id, configs);
        return response;
    },
};

export default UserService;
