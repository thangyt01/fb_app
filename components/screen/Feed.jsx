import { View, Text } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn/dist';
import Input from '../common/Input';

const Feed = () => {
  const tw = useTailwind();

  return (
    <View>
      <Input />
    </View>
  );
};

export default Feed;
