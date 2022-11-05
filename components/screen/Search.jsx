import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import Conan from '../../assets/conan.jpeg';
import Avatar from '../common/Avatar';
import Divider from '../common/Divider';

const Search = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{
        backgroundColor: 'white',
        height: '100%',
      }}
    >
      <StatusBar
        barStyle="dark-content"
        backgroundColor="white"
        translucent={true}
      />
      <View
        style={{
          marginTop: 10,
          paddingHorizontal: 10,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 20,
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesignIcon name="arrowleft" size={30} />
          </TouchableOpacity>

          <TextInput
            style={{
              marginLeft: 5,
              paddingHorizontal: 20,
              paddingVertical: 5,
              borderRadius: 20,
              flexGrow: 1,
              backgroundColor: '#eee',
            }}
            placeholder="Search..."
          />
        </View>

        <Divider
          height={1}
          styles={{
            marginHorizontal: -10,
          }}
        />
        <Text
          style={{
            fontSize: 16,
          }}
        >
          History
        </Text>

        <ScrollView
          style={{
            marginTop: 10,
          }}
          showsVerticalScrollIndicator={false}
        >
          {Array.from(Array(10).keys()).map((_, i) => (
            <TouchableOpacity key={i}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: 10,
                }}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <Avatar source={Conan} styles={{ marginRight: 5 }} />
                  <Text>Conan</Text>
                </View>
                <AntDesignIcon name="close" size={25} />
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Search;
