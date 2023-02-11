import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/auth.reducer';
import postReducer from './reducers/post.reducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';

const reducers = combineReducers({
    authReducer,
    postReducer
});

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});
