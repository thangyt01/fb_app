import axios from '../configs/axios.config';

const AuthService = {
    register: async (firstName, lastName, birthday, gender, phonenumber, password) => {
        const configs = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await axios.post(
            '/api/v1/users/register',
            {
                firstName,
                lastName,
                birthday,
                gender,
                phonenumber,
                password,
            },
            configs,
        );
        return response;
    },
    login: async (phonenumber, password) => {
        const configs = {
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const data = {
            phonenumber,
            password,
        };

        const response = await axios.post('/api/v1/users/login', data, configs);
        return response;
    },
};

export default AuthService;
