import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import AuthProvider, { useAuth } from '../context/AuthContext';
import Login from '../screen/Login';
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
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={BottomTabNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
};

export default AuthStack;
