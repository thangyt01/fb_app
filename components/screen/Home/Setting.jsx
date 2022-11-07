import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { logout } from '../../../api/auth';
import { useAuth } from '../../../context/AuthContext';
import Avatar from '../../common/Avatar';
import StyledButton from '../../common/Button';
import Card from '../../common/Card';

const Setting = () => {
  const navigation = useNavigation();
  const { dispatchAuth } = useAuth();

  const handleSignOut = async () => {
    await logout();
    AsyncStorage.removeItem('isLogged');
    dispatchAuth({
      type: 'SIGN_OUT',
    });
  };

  return (
    <View style={{ padding: 10 }}>
      <View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
          }}
        >
          Menu
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: 10,
        }}
      >
        <Avatar />

        <Pressable
          style={{ marginHorizontal: 5 }}
          onPress={() => navigation.navigate('Profile')}
        >
          <Text style={{ fontWeight: 'bold' }}>Conan</Text>
          <Text>See your profile</Text>
        </Pressable>
      </View>

      <View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 10,
          }}
        >
          All shortcuts
        </Text>
        <View style={{ flexDirection: 'row', marginVertical: 5 }}>
          <Card name="Feed" icon="table" />
          <Card name="Friends" icon="user-friends" />
        </View>
        <View style={{ flexDirection: 'row', marginVertical: 5, with: '100%' }}>
          <Card name="Groups" icon="comments" />
          <Card name="Marketplace" icon="shopping-bag" />
        </View>
        <View style={{ flexDirection: 'row', marginVertical: 5 }}>
          <Card name="Saved" icon="clone" />
          <Card name="Memories" icon="calendar-alt" />
        </View>
      </View>

      <StyledButton
        onPress={handleSignOut}
        title="Log Out"
        styles={{ paddingVertical: 12, marginVertical: 15 }}
      />
    </View>
  );
};

export default Setting;
