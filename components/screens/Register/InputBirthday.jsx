import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Pressable, View } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { useRegister } from '../../../context/RegisterContext';
import StyledButton from '../../layouts/Button';
import StyledTextInput from '../../layouts/TextInput';
import formatTime from '../../../utils/formatTime';

const InputBirthday = () => {
  const navigation = useNavigation();
  const { dispatchRegister, registerState } = useRegister();

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState(registerState.birthday);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    setDate(date);

    hideDatePicker();
  };

  return (
    <View
      style={{
        flex: 1,
        padding: 10,
        justifyContent: 'space-between',
        backgroundColor: 'white',
      }}
    >
      <Pressable
        onPress={() => {
          showDatePicker(true);
        }}
      >
        <StyledTextInput
          paddingHorizontal={12}
          marginVertical={5}
          placeholder="Birthday"
          fontSize={14}
          editable={false}
          value={formatTime(date)}
        />
      </Pressable>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />

      <StyledButton
        onPress={() => {
          dispatchRegister({
            type: 'REGISTER',
            payload: { birthday: date },
          });
          navigation.navigate('inputPhoneNumber');
        }}
        title="Next"
        fontSize={16}
        styles={{
          paddingVertical: 14,
        }}
        disable={!date}
        backgroundColor={!date ? '#ccc' : '#2270DC'}
        color={!date ? 'black' : 'white'}
      />
    </View>
  );
};

export default InputBirthday;
