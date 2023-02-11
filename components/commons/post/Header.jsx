import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import Conan from '../../../assets/conan.jpeg';
import Avatar from '../Avatar';

const Header = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Avatar
          source={Conan}
          styles={{
            marginRight: 5,
          }}
        />

        <View>
          <Text style={{ fontWeight: 'bold' }}>Conan</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                fontSize: 10,
                color: 'gray',
                marginRight: 10,
              }}
            >
              1 hour ago
            </Text>

            <AntDesignIcon name="earth" size={10} />
          </View>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-start',
        }}
      >
        <TouchableOpacity>
          <AntDesignIcon name="ellipsis1" size={25} />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginLeft: 30 }}>
          <AntDesignIcon name="close" size={25} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
