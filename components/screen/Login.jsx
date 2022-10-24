/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-unused-styles */
import axios from 'axios';
import React, { useState } from 'react';
import {
  Alert,
  Button,
  Image,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  View,
} from 'react-native';
import { useTailwind } from 'tailwind-rn/dist';
import facebookLogo from '../../assets/banner.png';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
  const tw = useTailwind();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://bkwatch.me:8010/api/login', {
        username,
        password,
      });
      AsyncStorage.setItem('token', response.data.data.access_token);
    } catch (error) {
      Alert.alert(error.response);
    }
  };

  return (
    <ScrollView style={tw('bg-white h-full')}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#30477C"
        translucent={true}
      />

      <View style={tw('flex-12')}>
        <View style={tw('flex-[1.7]')}>
          <Image source={facebookLogo} style={tw('w-full h-60')} />
        </View>
        <View style={tw('flex-3 mx-5')}>
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
