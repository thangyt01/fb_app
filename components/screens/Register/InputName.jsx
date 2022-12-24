import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { useRegister } from '../../../context/RegisterContext';
import StyledButton from '../../layouts/Button';
import Gap from '../../layouts/Gap';
import StyledTextInput from '../../layouts/TextInput';

const InputName = () => {
  const navigation = useNavigation();
  const { dispatchRegister, registerState } = useRegister();

  const [firstname, setFirstname] = useState(registerState.firstname);
  const [lastname, setLastname] = useState(registerState.lastname);
  const [email, setEmail] = useState(registerState.email);

  const disableButton = !firstname || !lastname || !email;

  return (
    <View
      style={{
        flex: 1,
        padding: 10,
        justifyContent: 'space-between',
      }}
    >
      <View>
        <Text>Enter the name you use real life</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <StyledTextInput
            placeholder="First name"
            flex={1}
            fontSize={14}
            value={firstname}
            onChange={text => {
              setFirstname(text);
            }}
          />
          <Gap direction="horizontal" size={15} />
          <StyledTextInput
            placeholder="Last name"
            flex={1}
            fontSize={14}
            value={lastname}
            onChange={text => {
              setLastname(text);
            }}
          />
        </View>

        <StyledTextInput
          paddingHorizontal={12}
          marginVertical={5}
          placeholder="Email"
          value={email}
          fontSize={14}
          onChange={text => {
            setEmail(text);
          }}
        />
      </View>

      <StyledButton
        onPress={() => {
          dispatchRegister({
            type: 'REGISTER',
            payload: { email, firstname, lastname },
          });
          navigation.navigate('inputBirthday');
        }}
        title="Next"
        fontSize={16}
        styles={{
          paddingVertical: 14,
        }}
        disable={disableButton}
        backgroundColor={disableButton ? '#ccc' : '#2270DC'}
        color={disableButton ? 'black' : 'white'}
      />
    </View>
  );
};

export default InputName;
