import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useRegister } from '../../context/RegisterContext';
import StyledButton from '../../components/commons/Button';
import Gap from '../../components/commons/Gap';
import StyledTextInput from '../../components/commons/TextInput';

const InputPassword = () => {
  const pattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{6,})$/;
  const { dispatchRegister, registerState } = useRegister();

  const [password, setPassword] = useState(registerState.password);
  const [error, setError] = useState('');
  const [isValid, setIsValid] = useState(false);

  const navigation = useNavigation();

  const onChange = text => {
    setPassword(text);
    if (text && !text.match(pattern)) {
      setError('Password must be strong');
      setIsValid(false);
    } else {
      setError('');
      setIsValid(true);
    }
  };

  useEffect(() => {
    setPassword('');
  }, []);

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
        <Text>
          Create a password with at least 6 letters and numbers. It should be
          something that others cannot guess
        </Text>
        <Gap size={15} direction="vertical" />
        <StyledTextInput
          paddingHorizontal={12}
          marginVertical={5}
          placeholder="Password"
          fontSize={14}
          keyboardType="password"
          secureTextEntry
          value={password}
          onChange={onChange}
        />
        <Text style={{ color: 'red' }}>{error}</Text>
      </View>

      <StyledButton
        onPress={() => {
          dispatchRegister({
            type: 'REGISTER',
            payload: { password },
          });
          navigation.navigate('finish');
        }}
        title="Next"
        fontSize={16}
        styles={{
          paddingVertical: 14,
        }}
        disable={!isValid}
        backgroundColor={!isValid ? '#ccc' : '#2270DC'}
        color={!isValid ? 'black' : 'white'}
      />
    </View>
  );
};

export default InputPassword;
