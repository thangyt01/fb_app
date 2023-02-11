import { useSelector } from 'react-redux';
import axios from '../configs/axios.config';
import { authSelector } from '../store/reducers/auth.reducer';

const FriendService = {
    getSuggested: async (userToken) => {
        const configs = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userToken}`,
            },
        };

        const response = await axios.get('/api/v1/friends/list_suggested', configs);
        return response;
    },
    getListRequest: async (userToken) => {
        const configs = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userToken}`,
            },
        };

        const response = await axios.get('/api/v1/friends/list_requests', configs);
        return response;
    },
    sendRequest: async (userToken, receiver) => {
        const configs = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userToken}`,
            },
        };

        const data = {
            user_id: receiver, // receiver: id cua nguoi nhan request
        };

        const response = await axios.post('/api/v1/friends/set-request-friend', data, configs);
        return response;
    },
    setAccept: async (userToken, sender, is_accept) => {
        const configs = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userToken}`,
            },
        };

        const data = {
            user_id: sender, // sender: id cua nguoi gui request
            is_accept: is_accept,
        };

        const response = await axios.post('/api/v1/friends/set-accept', data, configs);
        return response;
    },
    getList: async (userToken, user_id) => {
        const configs = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userToken}`,
            },
        };

        const data = {
            user_id,
        };

        const response = await axios.post('/api/v1/friends/list', data, configs);
        return response;
    },
};

export default FriendService;
