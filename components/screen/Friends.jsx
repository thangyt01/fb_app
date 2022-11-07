import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { useNavigation } from '@react-navigation/native';
import React, { useRef, useState } from 'react';
import {
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import Avatar from '../common/Avatar';
import Divider from '../common/Divider';
import Search from '../common/Search';
import Title from '../common/Title';

const Friends = () => {
  const [user, setUser] = useState(null);

  const navigation = useNavigation();

  const bottomSheetModalRef = useRef(null);

  const handleRemove = user => {
    bottomSheetModalRef.current.present();
    setUser(user);
  };

  return (
    <>
      <View style={{ flex: 1, backgroundColor: 'white', height: '100%' }}>
        <Pressable onPress={() => navigation.goBack()}>
          <Title name="Friends" />
        </Pressable>
        <Search marginTop={80} marginHorizontal={10} />

        <View
          style={{
            paddingHorizontal: 15,
            flex: 1,
          }}
        >
          <Text
            style={{ marginVertical: 10, fontSize: 20, fontWeight: 'bold' }}
          >
            20 friends
          </Text>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ height: '100%' }}
          >
            {[...Array(20).keys()].map((_, index) => (
              <View
                key={index}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginVertical: 5,
                }}
              >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Avatar styles={{ marginRight: 7 }} size={60} />
                  <Text style={{ fontSize: 18 }}>Conan</Text>
                </View>

                <TouchableOpacity onPress={() => handleRemove(index)}>
                  <AntDesignIcon name="ellipsis1" size={25} />
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>

      <BottomSheetModal
        ref={bottomSheetModalRef}
        snapPoints={['25%']}
        containerStyle={{
          backgroundColor: '#343434cc',
        }}
      >
        <View
          style={{
            padding: 10,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 15,
            }}
          >
            <Avatar size={60} />
            <Text
              style={{ marginHorizontal: 10, fontSize: 25, fontWeight: 'bold' }}
            >
              Conan
            </Text>
          </View>
          <Divider height={1} />

          <View
            style={{
              marginVertical: 20,
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <AntDesignIcon name="deleteuser" size={40} color="red" />
            <View style={{ marginHorizontal: 15 }}>
              <Text style={{ color: 'red' }}>Unfriend Conan {user}</Text>
              <Text style={{ color: 'gray' }}>Remove Conan as friend</Text>
            </View>
          </View>
        </View>
      </BottomSheetModal>
    </>
  );
};

export default Friends;
