import axios from 'axios';
import { Alert } from 'react-native';
import { refreshAccessToken } from '../api/auth';

const axiosClient = axios.create({
  baseURL: 'https://devapi.bkwatch.me/api/',
  timeout: 50000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

axiosClient.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    const originalRequest = error.config;
    if (error.response.status === 401) {
      await refreshAccessToken();
      return axiosClient(originalRequest);
    }
    return Alert.alert(error);
  },
);

export default axiosClient;
