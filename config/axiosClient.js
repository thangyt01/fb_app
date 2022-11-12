import axios from 'axios';
import { Alert } from 'react-native';

export const refreshAccessToken = async () => {
  try {
    await axios.post('https://devapi.bkwatch.me/api/refresh-token');
  } catch (error) {
    Alert.alert(JSON.stringify(error));
  }
};

const axiosClient = axios.create({
  baseURL: 'https://devapi.bkwatch.me/api/',
  timeout: 5000,
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
