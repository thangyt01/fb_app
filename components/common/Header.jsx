import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useTailwind } from 'tailwind-rn';
import CameraIcon from '../../assets/camera.png';
import MessengerIcon from '../../assets/messenger.png';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = () => {
  const tw = useTailwind();

  return (
    <View>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#30477C"
        translucent={true}
      />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingTop: 20,
          alignItems: 'center',
          height: 80,
          backgroundColor: '#30477c',
          paddingHorizontal: 10,
        }}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            color: 'white',
          }}>
          facebook
        </Text>
        <TouchableOpacity>
          <Icon name="ios-search-outline" size={30} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
