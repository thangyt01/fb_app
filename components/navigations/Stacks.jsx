import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { getProfile } from '../../apis/auth.api';
import { useAuth } from '../../context/AuthContext';
import CreatePost from '../screens/CreatePost';
import Friends from '../screens/Friends';
import Home from '../screens/Home';
import Spinner from '../screens/Spinner';
import Login from '../screens/Login';
import Profile from '../screens/Profile';
import EditProfile from '../screens/EditProfile';
import Search from '../screens/Search';
import Register from '../screens/Register';

const Stacks = () => {
  const Stack = createNativeStackNavigator();

  const {
    authStateContext: { isLogged },
    dispatchAuth,
  } = useAuth();

  useEffect(() => {
    const refreshApp = async () => {
      const result = await getProfile();
      dispatchAuth({
        type: 'REFRESH_TOKEN',
        payload: {
          currentUser: result?.data,
        },
      });
    };

    AsyncStorage.getItem('isLogged').then(value => {
      if (value === 'true') {
        refreshApp();
      } else {
        dispatchAuth({
          type: 'SET_LOADING',
          payload: { isLoading: false },
        });
      }
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
        }}
      >
        {isLogged ? (
          <React.Fragment>
            <Stack.Screen name="home" component={Home} />
            <Stack.Screen name="friends" component={Friends} />
            <Stack.Screen name="profile" component={Profile} />
            <Stack.Screen name="editProfile" component={EditProfile} />
            <Stack.Screen name="search" component={Search} />
            <Stack.Screen
              name="createPost"
              component={CreatePost}
              options={{
                animation: 'slide_from_bottom',
              }}
            />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="register" component={Register} />
          </React.Fragment>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Stacks;
