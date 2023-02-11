import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { useRegister } from '../../context/RegisterContext';
import StyledButton from '../../components/commons/Button';
import StyledTextInput from '../../components/commons/TextInput';

const InputPhoneNumber = () => {
  const navigation = useNavigation();
  const { dispatchRegister, registerState } = useRegister();
  const [phone, setPhone] = useState(registerState.phone);
  const [error, setError] = useState('');

  const isNext = phone && !error;
  console.log({ isNext: isNext });

  const onCheck = text => {
    const isValidPhone = text.match(/(84|0[3|5|7|8|9])+([0-9]{8})\b/g);
    if (!isValidPhone) {
      setError('Invalid phone number');
    } else {
      setError('');
    }
  };

  useEffect(() => {
    setError('');
  }, []);

  return (
    <View
      style={{
        flex: 1,
        padding: 10,
        justifyContent: 'space-between',
        backgroundColor: 'white',
      }}
    >
      <View>
        <StyledTextInput
          paddingHorizontal={12}
          marginVertical={5}
          placeholder="Mobile number"
          fontSize={14}
          keyboardType="numeric"
          value={phone}
          onChange={text => {
            setPhone(text);
            onCheck(text);
          }}
        />

        {error && (
          <Text
            style={{
              color: 'red',
            }}
          >
            {error}
          </Text>
        )}
      </View>
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
        disable={!isNext}
        backgroundColor={isNext ? '#2270DC' : '#ccc'}
        color={isNext ? 'white' : 'black'}
      />
    </View>
  );
};

export default InputPhoneNumber;
