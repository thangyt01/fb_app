import { View, Text } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn/dist';

const Feed = () => {
  const tw = useTailwind();

  return (
    <View style={tw('h-full items-center justify-center')}>
      <Text>Feed</Text>
    </View>
  );
};

export default Feed;
