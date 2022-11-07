import axios from 'axios';
import axiosClient from '../config/axiosClient';
import { Alert } from 'react-native';

const login = async ({ username, password }) => {
  try {
    const response = await axios.post('https://devapi.bkwatch.me/api/login', {
      username,
      password,
    });

    return response.data;
  } catch (error) {
    Alert.alert(JSON.stringify(error));
  }
};

const register = async () => {
  try {
    /**
     * code
     */
  } catch (error) {
    Alert.alert(JSON.stringify(error));
  }
};

const logout = async () => {
  try {
    await axios.post('https://devapi.bkwatch.me/api/logout');
  } catch (error) {
    Alert.alert(JSON.stringify(error));
  }
};

const getProfile = async () => {
  try {
    const response = await axiosClient.get(
      'https://devapi.bkwatch.me/api/profile',
    );
    return response.data;
  } catch (error) {
    Alert.alert(JSON.stringify(error));
  }
};

export { login, register, logout, getProfile };
