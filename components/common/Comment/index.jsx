import { View, Text } from 'react-native';
import React from 'react';
import Avatar from '../Avatar';

const Comment = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginVertical: 10,
        justifyContent: 'space-between',
      }}
    >
      <Avatar size={40} />

      <View
        style={{
          marginHorizontal: 8,
        }}
      >
        <View
          style={{
            backgroundColor: '#EEEDEE',
            padding: 8,
            borderRadius: 10,
            width: '90%',
          }}
        >
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 15,
            }}
          >
            Conan
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            laborum quibusdam ut exercitationem fugiat qui. Veniam distinctio
            fugit iste neque qui reiciendis porro illo, iusto tempore eum rerum,
            eius unde.
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            width: '40%',
            justifyContent: 'space-between',
          }}
        >
          <Text>12m</Text>
          <Text
            style={{
              fontWeight: 'bold',
            }}
          >
            Like
          </Text>
          <Text
            style={{
              fontWeight: 'bold',
            }}
          >
            Reply
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Comment;
