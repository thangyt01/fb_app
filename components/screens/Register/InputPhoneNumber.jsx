import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View } from 'react-native';
import { useRegister } from '../../../context/RegisterContext';
import StyledButton from '../../layouts/Button';
import StyledTextInput from '../../layouts/TextInput';

const InputPhoneNumber = () => {
  const navigation = useNavigation();
  const { dispatchRegister, registerState } = useRegister();
  const [phone, setPhone] = useState(registerState.phone);

  return (
    <View
      style={{
        flex: 1,
        padding: 10,
        justifyContent: 'space-between',
        backgroundColor: 'white',
      }}
    >
      <StyledTextInput
        paddingHorizontal={12}
        marginVertical={5}
        placeholder="Mobile number"
        fontSize={14}
        keyboardType="numeric"
        value={phone}
        onChange={text => {
          setPhone(text);
        }}
      />
      <StyledButton
        onPress={() => {
          dispatchRegister({
            type: 'REGISTER',
            payload: {
              phone,
            },
          });
          navigation.navigate('inputSex');
        }}
        title="Next"
        fontSize={16}
        styles={{
          paddingVertical: 14,
        }}
        disable={!phone}
        backgroundColor={!phone ? '#ccc' : '#2270DC'}
        color={!phone ? 'black' : 'white'}
      />
    </View>
  );
};

export default InputPhoneNumber;
