import { View, Text } from 'react-native';
import React from 'react';
import Divider from '../../../common/Divider';

const Header = ({ name, children, onEdit, styles }) => {
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20,
          }}
        >
          {name}
        </Text>
        <Text
          style={{
            fontSize: 20,
            color: '#2270DC',
          }}
        >
          Edit
        </Text>
      </View>

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {children}
      </View>

      <Divider height={1} styles={{ marginVertical: 25 }} />
    </>
  );
};

export default Header;
