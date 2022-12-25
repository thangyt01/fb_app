import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { useNavigation } from '@react-navigation/native';
import React, { Fragment, useRef, useState } from 'react';
import {
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import Avatar from '../layouts/Avatar';
import Divider from '../layouts/Divider';
import Search from '../layouts/Search';
import Title from '../layouts/Title';

const Friends = () => {
  const data = [...Array(2).keys()];

  const [friends, setFriends] = useState(data);

  const navigation = useNavigation();

  const bottomSheetModalRef = useRef(null);

  const onChoose = () => {
    bottomSheetModalRef.current.present();
  };

  const onRemove = id => {
    let newData = friends.filter((_, index) => index !== id);
    setFriends(newData);
    bottomSheetModalRef.current.close();
  };

  return (
    <Fragment>
      <View
        style={{
          flex: 1,
          padding: 10,
          backgroundColor: 'white',
        }}
      >
        <Search />

        <View
          style={{
            flexDirection: 'column',
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
            {friends.map(({ name = 'Conan' }, index) => (
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
                  <Text style={{ fontSize: 18 }}>{name}</Text>
                </View>

                <TouchableOpacity onPress={() => onChoose(index)}>
                  <AntDesignIcon name="ellipsis1" size={25} />
                </TouchableOpacity>

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
                        style={{
                          marginHorizontal: 10,
                          fontSize: 25,
                          fontWeight: 'bold',
                        }}
                      >
                        {name}
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
                      <Pressable
                        style={{ marginHorizontal: 15 }}
                        onPress={() => onRemove(index)}
                      >
                        <Text style={{ color: 'red' }}>Unfriend {name}</Text>
                        <Text style={{ color: 'gray' }}>
                          Remove {name} as friend
                        </Text>
                      </Pressable>
                    </View>
                  </View>
                </BottomSheetModal>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </Fragment>
  );
};

export default Friends;
