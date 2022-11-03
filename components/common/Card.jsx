import { View, Text } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';

const Card = ({ name, icon }) => {
  return (
    <View
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
    >
      <FontAwesomeIcon name={icon} size={20} />
      <Text>{name}</Text>
    </View>
  );
};

export default Card;
