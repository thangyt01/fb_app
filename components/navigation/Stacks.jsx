import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { useAuth } from '../../context/AuthContext';
import CreatePost from '../screen/CreatePost';
import Home from '../screen/Home';
import Login from '../screen/Login';
import Search from '../screen/Search';
import Profile from '../screen/Profile';
import EditProfile from '../screen/Profile/Edit';

const Stacks = () => {
  const Stack = createNativeStackNavigator();

  const {
    authStateContext: { isLogged },
  } = useAuth();

  //   useEffect(() => {
  //     const refreshApp = async () => {
  //       setIsLoading(true);
  //       const result = await getProfile();
  //       setCurrentUser(result.data);
  //       setIsLogged(true);
  //       setIsLoading(false);
  //     };

  //     AsyncStorage.getItem('isLogged').then(value => {
  //       if (value === 'true') {
  //         refreshApp();
  //       }
  //     });
  //   }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="EditProfile"
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
        }}
      >
        {isLogged ? (
          <>
            <Stack.Screen name="Home" component={Home} />
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
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={Login} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Stacks;
