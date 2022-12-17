import React from 'react';
import { Image } from 'react-native';
import Conan from '../../assets/conan.jpeg';

const Avatar = ({ styles, source = Conan, size = 36 }) => {
  return (
    <Image
      source={source}
      style={{
        width: size,
        height: size,
        borderRadius: 100,
        ...styles,
      }}
    />
  );
};

export default Avatar;
