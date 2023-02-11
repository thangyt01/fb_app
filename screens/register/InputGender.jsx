import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { useRegister } from '../../context/RegisterContext';
import StyledButton from '../../components/commons/Button';

const InputGender = () => {
  const navigation = useNavigation();
  const { dispatchRegister, registerState } = useRegister();
  const [open, setOpen] = useState(false);
  const [gender, setGender] = useState(registerState.gender);
  const [items, setItems] = useState([
    { label: 'Female', value: 'female' },
    { label: 'Male', value: 'male' },
    { label: 'Other', value: 'other' },
  ]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: 'white',
      }}
    >
      <DropDownPicker
        modalTitle="hello"
        open={open}
        value={gender}
        items={items}
        setOpen={setOpen}
        setValue={setGender}
        setItems={setItems}
        style={{
          borderColor: '#ccc',
        }}
        dropDownContainerStyle={{
          borderColor: '#ccc',
        }}
        placeholder="Select gender"
      />
      <StyledButton
        onPress={() => {
          dispatchRegister({
            type: 'REGISTER',
            payload: { gender: gender },
          });
          navigation.navigate('inputPassword');
        }}
        title="Next"
        fontSize={16}
        styles={{
          paddingVertical: 14,
        }}
      />
    </View>
  );
};

export default InputGender;
