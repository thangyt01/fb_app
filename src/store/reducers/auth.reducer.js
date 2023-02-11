import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoggedIn: false,
    user: null,
    token: '',
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action) {
            state.isLoggedIn = true;
            state.user = action.payload.data;
            state.userToken = action.payload.token;
        },
        logout(state) {
            state.isLoggedIn = false;
        },
    },
});

export const authSelector = (state) => state.authReducer;

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
