import React from 'react';
import { Pressable, Text, TouchableOpacity } from 'react-native';
import { useTailwind } from 'tailwind-rn/dist';

const StyledButton = ({ onPress, title, backgroundColor }) => {
  const tw = useTailwind();

  return (
    <Pressable
      style={{ backgroundColor, paddingVertical: 10 }}
      onPress={onPress}>
      <TouchableOpacity style={tw('w-full items-center')}>
        <Text style={tw('text-white uppercase font-bold')}>{title}</Text>
      </TouchableOpacity>
    </Pressable>
  );
};

export default StyledButton;
