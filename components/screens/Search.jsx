import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import Conan from '../../assets/conan.jpeg';
import Avatar from '../layouts/Avatar';

const Search = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
        padding: 10,
      }}
    >
      <TextInput
        style={{
          height: 40,
          paddingHorizontal: 20,
          borderRadius: 20,
          borderWidth: 1,
          borderColor: '#ccc',
          marginVertical: 10,
        }}
        placeholder="Search..."
      />

      <Text>History</Text>

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
  );
};

export default Search;
