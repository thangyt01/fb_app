import React from 'react';
import { View } from 'react-native';

const Divider = ({ height = 10, styles }) => {
  return (
    <View
      style={{
        height,
        backgroundColor: '#C9CAD0',
        ...styles,
      }}
    ></View>
  );
};

export default Divider;
