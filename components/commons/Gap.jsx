import React from 'react';
import { View } from 'react-native';

const Gap = ({ size, direction = 'horizontal' }) => {
  return (
    <View
      style={{ [direction === 'horizontal' ? 'width' : 'height']: size }}
    ></View>
  );
};

export default Gap;
