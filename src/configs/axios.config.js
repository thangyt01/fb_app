import axios from 'axios';
import { serverUrl } from '../constants/serverUrl';

const instance = axios.create({
    baseURL: serverUrl.HTTP_SERVER_URL,
});

export const setAuthToken = (token) => {
    if (token) {
        instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        instance.defaults.withCredentials = false;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
};

export default instance;
