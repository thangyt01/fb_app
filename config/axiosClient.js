import axios from 'axios';
import { Alert } from 'react-native';
import { refreshAccessToken } from '../api/auth';

const axiosClient = axios.create({
	baseURL: '',
	timeout: 50000,
	headers: {
		Authorization: `Bearer `,
		'Content-Type': 'application/json',
		Accept: 'application/json',
	},
});

axiosClient.interceptors.response.use(
	(response) => {
		return response;
	},
	async (error) => {
		const originalRequest = error.config;
		if (error.response.status === 401) {
			const access_token = await refreshAccessToken();
			originalRequest.headers['Authorization'] = 'Bearer ' + access_token;
			return axiosClient(originalRequest);
		}
		return Alert.alert(error);
	}
);

export default axiosClient;
