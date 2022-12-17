import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import {
  Button,
  Image,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  View,
} from 'react-native';
import { useTailwind } from 'tailwind-rn/dist';
import { login } from '../../api/auth';
import facebookLogo from '../../assets/banner.png';
import {useAuth} from '../../context/AuthContext';

const Login = () => {
  const tw = useTailwind();
  const { dispatchAuth } = useAuth();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const result = await login({ username, password });
      await AsyncStorage.setItem('isLogged', JSON.stringify(true));
      dispatchAuth({
        type: 'SIGN_IN',
        payload: {
          currentUser: result.data.profile,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView
      style={tw('bg-white h-full')}
      showsVerticalScrollIndicator={false}
    >
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#30477C"
        translucent={true}
      />

      <View style={tw('flex-1')}>
        <View>
          <Image source={facebookLogo} style={tw('w-full h-60')} />
        </View>
        <View style={tw('mx-5')}>
          <View style={tw('mt-5')}>
            <TextInput
              style={tw('h-10 border-b-[1px] mb-3 border-b-[#ECEAEC]')}
              placeholder="Email or username"
              onChangeText={inputEmail => setUsername(inputEmail)}
            />
            <TextInput
              style={tw('h-10 border-b-[1px] mb-3 border-b-[#ECEAEC]')}
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={inputPassword => setPassword(inputPassword)}
            />
          </View>
          <View style={tw('mt-3')}>
            <Button
              title="Login"
              color="#4E68A2"
              onPress={handleLogin}
              disabled={!username || !password}
            />
          </View>
          <Text style={tw('mt-5 self-center')}>Forgotten password?</Text>
        </View>
        <View style={tw('flex-row mt-5')}>
          <View style={tw('flex-grow border-b border-b-[#ddd]')} />
          <Text style={tw('-mb-2 mx-1')}>OR</Text>
          <View style={tw('flex-grow border-b border-b-[#ddd]')} />
        </View>
        <View style={tw('mt-5 mx-6 justify-center items-center')}>
          <Button title="Create account" color="#07A007" />
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;
