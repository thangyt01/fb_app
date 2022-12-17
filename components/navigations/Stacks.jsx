import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { getProfile } from '../../api/auth';
import { refreshAccessToken } from '../../config/axiosClient';
import { useAuth } from '../../context/AuthContext';
import CreatePost from '../screens/CreatePost';
import Friends from '../screens/Friends';
import Home from '../screens/Home';
import Spinner from '../screens/Spinner';
import Login from '../screens/Login';
import Profile from '../screens/Profile';
import EditProfile from '../screens/EditProfile';
import Search from '../screens/Search';

const Stacks = () => {
  const Stack = createNativeStackNavigator();

  const isLogged = true;
  const isLoading = false;

  //   const {
  //     authStateContext: { isLogged, isLoading },
  //     dispatchAuth,
  //   } = useAuth();

  //   useEffect(() => {
  //     const refreshApp = async () => {
  //       await refreshAccessToken();
  //       const result = await getProfile();
  //       dispatchAuth({
  //         type: 'REFRESH_TOKEN',
  //         payload: {
  //           currentUser: result.data,
  //         },
  //       });
  //       dispatchAuth({
  //         type: 'SET_LOADING',
  //         payload: { isLoading: false },
  //       });
  //     };

  //     AsyncStorage.getItem('isLogged').then(value => {
  //       if (value === 'true') {
  //         refreshApp();
  //       } else {
  //         dispatchAuth({
  //           type: 'SET_LOADING',
  //           payload: { isLoading: false },
  //         });
  //       }
  //     });
  //   }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
        }}
      >
        {isLoading ? (
          <Stack.Screen name="Loading" component={Spinner} />
        ) : isLogged ? (
          <React.Fragment>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Friends" component={Friends} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="EditProfile" component={EditProfile} />
            <Stack.Screen name="Search" component={Search} />
            <Stack.Screen
              name="CreatePost"
              component={CreatePost}
              options={{
                animation: 'slide_from_bottom',
              }}
            />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Stack.Screen name="Login" component={Login} />
          </React.Fragment>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Stacks;
