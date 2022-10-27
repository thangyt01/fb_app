import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import Conan from '../../assets/conan.jpeg';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const Input = () => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        paddingHorizontal: 10,
        paddingTop: 10,
        paddingBottom: 10,
        //   width: '100%',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image
          source={Conan}
          style={{
            width: 50,
            height: 50,
            borderRadius: 100,
            marginRight: 2,
          }}
        />

        <TextInput
          style={{
            flexGrow: 1,
            padding: 10,
            width: '100%',
            fontSize: 20,
          }}
          multiline={true}
          placeholder="What's on your mind?"
        />
      </View>

      <View
        style={{
          marginVertical: 10,
          width: '100%',
          height: 0.5,
          backgroundColor: '#ccc',
        }}></View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 30,
        }}>
        <TouchableOpacity>
          <MaterialIcon name="photo-camera-front" color="#F44337" size={30} />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcon name="insert-photo" color="#4CAF50" size={30} />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcon name="meeting-room" color="#E141FC" size={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Input;
