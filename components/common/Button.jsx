import React from 'react';
import { Pressable, Text, TouchableOpacity, View } from 'react-native';

const StyledButton = ({
  onPress,
  title,
  backgroundColor = '#2270DC',
  color = 'white',
  borderRadius = 10,
}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor,
        paddingHorizontal: 20,
        borderRadius,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text
        style={{
          color,
          fontSize: 16,
          fontWeight: 'bold',
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default StyledButton;
