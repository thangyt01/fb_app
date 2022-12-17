import { View, Text, Pressable } from 'react-native';
import React from 'react';
import Divider from '../../layouts/Divider';

const Header = ({ name, children, onEdit, styles, onPress }) => {
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
        <Pressable onPress={onPress}>
          <Text
            style={{
              fontSize: 15,
              color: '#2270DC',
            }}
          >
            Edit
          </Text>
        </Pressable>
      </View>

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {children}
      </View>

      <Divider height={1} styles={{ marginVertical: 15 }} />
    </>
  );
};

export default Header;
