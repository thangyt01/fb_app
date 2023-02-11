/* eslint-disable quotes */
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InputBirthday from './InputBirthday';
import InputName from './InputName';
import InputPhoneNumber from './InputPhoneNumber';
import Start from './Start';
import InputGender from './InputGender';
import Finish from './Finish';
import InputPassword from './InputPassword';

const Register = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        animation: 'slide_from_right',
      }}
    >
      <Stack.Screen
        name="started"
        component={Start}
        options={{
          headerTitle: 'Join Facebook',
        }}
      />
      <Stack.Screen
        name="inputName"
        component={InputName}
        options={{
          headerTitle: "What's about you?",
        }}
      />
      <Stack.Screen
        name="inputBirthday"
        component={InputBirthday}
        options={{
          headerTitle: "What's your date of birth?",
        }}
      />
      <Stack.Screen
        name="inputPhoneNumber"
        component={InputPhoneNumber}
        options={{
          headerTitle: "What's your mobile number?",
        }}
      />
      <Stack.Screen
        name="inputSex"
        component={InputGender}
        options={{
          headerTitle: 'Select gender',
        }}
      />
      <Stack.Screen
        name="inputPassword"
        component={InputPassword}
        options={{
          headerTitle: 'Create a password',
        }}
      />
      <Stack.Screen
        name="finish"
        component={Finish}
        options={{
          headerTitle: 'Finish',
        }}
      />
    </Stack.Navigator>
  );
};

export default Register;
