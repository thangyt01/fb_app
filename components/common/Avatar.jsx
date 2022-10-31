import React from 'react';
import { Image } from 'react-native';
import Conan from '../../assets/conan.jpeg';

const Avatar = ({ width = 36, height = 36, styles, source = Conan }) => {
  return (
    <Image
      source={source}
      style={{
        width,
        height,
        borderRadius: 100,
        ...styles,
      }}
    />
  );
};

export default Avatar;
