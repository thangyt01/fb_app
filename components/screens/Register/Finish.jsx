import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { View, Text, Image } from 'react-native';
import { register, login } from '../../../apis/auth.api';
import facebookLogo from '../../../assets/banner.png';
import { useAuth } from '../../../context/AuthContext';
import { defaultValue, useRegister } from '../../../context/RegisterContext';
import StyledButton from '../../layouts/Button';

const Finish = () => {
  const { dispatchRegister, registerState } = useRegister();
  const { dispatchAuth } = useAuth();

  const onRegister = async () => {
    try {
      console.log({ registerState });
      const response = await register(registerState);
      console.log({ response });

      if (response.code === 1000) {
        const { email, password } = registerState;
        const response = await login({ username: email, password });
        await AsyncStorage.setItem('isLogged', JSON.stringify(true));
        dispatchAuth({
          type: 'SIGN_IN',
          payload: {
            currentUser: response.data.profile,
          },
        });
        dispatchRegister(defaultValue);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: 'white',
      }}
    >
      <View>
        <Image source={facebookLogo} style={{ width: '100%', height: '50%' }} />
        <Text style={{ marginVertical: 15, fontSize: 14 }}>
          Please click Submit to register your account. Happy hacking !!
        </Text>
      </View>

      <StyledButton
        title="Submit"
        fontSize={16}
        styles={{
          paddingVertical: 14,
        }}
        onPress={onRegister}
      />
    </View>
  );
};

export default Finish;
