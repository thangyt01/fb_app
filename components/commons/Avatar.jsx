import React from 'react';
import { Image } from 'react-native';
import Conan from '../../assets/conan.jpeg';

const Avatar = ({ styles, source = Conan, size = 36 }) => {
  return (
    <Image
      source={{
        uri: 'https://vcdn1-giaitri.vnecdn.net/2022/08/11/Conan123123-1660208805-2443-1660208872.png?w=1200&h=0&q=100&dpr=1&fit=crop&s=obB4rMkcVq2QC1teByr3aA',
      }}
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
