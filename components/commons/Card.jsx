import React from 'react';
import { Pressable, Text, View } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';

const Card = ({ name, icon, onPress }) => {
  return (
    <>
      <Pressable
        style={{
          borderRadius: 10,
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'center',
          flexGrow: 1,
          paddingVertical: 15,
          marginHorizontal: 5,
          shadowColor: '#000',
          width: '40%',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,
          elevation: 3,
        }}
        onPress={onPress}
      >
        <FontAwesomeIcon name={icon} size={20} />
        <Text>{name}</Text>
      </Pressable>
    </>
  );
};

export default Card;
