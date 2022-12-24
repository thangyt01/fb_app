import axios from 'axios';
import { Alert } from 'react-native';
import http from '../utils/http';

const login = async ({ username, password }) => {
  try {
    const response = await axios.post('https://devapi.bkwatch.me/api/login', {
      username,
      password,
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const register = async body => {
  try {
    const { lastname, ...data } = body;
    const response = await http.post('register', {
      ...body,
      birthday: '2001-01-01',
      username: lastname,
      address: 'Vietnam',
      link_github: 'https://github.com/',
      link_twitter: 'https://twitter.com/',
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

const logout = async () => {
  try {
    await http.post('https://devapi.bkwatch.me/api/logout');
  } catch (error) {
    console.log(error);
  }
};

const getProfile = async () => {
  try {
    const response = await http.get('profile');
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const editProfile = async body => {
  try {
    await http.post('profile', body);
  } catch (error) {
    console.log(error);
  }
};

export { login, register, logout, getProfile, editProfile };
