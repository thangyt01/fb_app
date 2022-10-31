import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import Divider from '../Divider';

const Footer = () => {
  return (
    <>
      <TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <AntDesignIcon name="like1" size={15} color="#3673cb" />
            <Text>100</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
            }}>
            <Text>171 comments</Text>
            <Text> - </Text>
            <Text>3 shares</Text>
          </View>
        </View>
      </TouchableOpacity>
      <Divider
        height={1}
        styles={{
          marginHorizontal: -10,
          marginBottom: 5,
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
          marginVertical: 5,
        }}>
        <AntDesignIcon name="like2" size={20} />
        <AntDesignIcon name="message1" size={20} />
        <AntDesignIcon name="sync" size={20} />
      </View>
    </>
  );
};

export default Footer;
