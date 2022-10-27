import { View, Text } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn';

const Profile = () => {
  const tw = useTailwind();

  return (
    <View style={tw('h-full items-center justify-center')}>
      <Text>Profile</Text>
    </View>
  );
};

export default Profile;
