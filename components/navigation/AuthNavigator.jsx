import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import AuthProvider, { useAuth } from '../context/AuthContext';
import CreatePost from '../screen/CreatePost';
import Login from '../screen/Login';
import Search from '../screen/Search';
import BottomTabNavigator from './BottomTabNavigator';

const AuthStack = () => {
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
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
        }}>
        {isLogged ? (
          <>
            <Stack.Screen name="Home" component={BottomTabNavigator} />
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

export default AuthStack;
