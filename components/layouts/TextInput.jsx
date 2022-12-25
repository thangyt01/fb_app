import React from 'react';
import { TextInput } from 'react-native';

const StyledTextInput = ({
  placeholder,
  editable,
  keyboardType,
  value,
  secureTextEntry,
  onChange,
  onBlur,
  bgColor = 'white',
  width = '100%',
  height = 50,
  marginVertical = 15,
  padding = 12,
  fontSize = 16,
  ...props
}) => {
  return (
    <TextInput
      style={{
        height: height,
        padding: padding,
        backgroundColor: bgColor,
        width: width,
        fontSize: fontSize,
        marginVertical: marginVertical,
        borderRadius: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        ...props,
      }}
      onChangeText={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
      editable={editable}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
      value={value}
    />
  );
};

export default StyledTextInput;
