import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { getProfile, logout } from '../../../apis/auth.api';
import { useAuth } from '../../../context/AuthContext';
import Avatar from '../../layouts/Avatar';
import StyledButton from '../../layouts/Button';
import Card from '../../layouts/Card';
import Spinner from '../Spinner';

const Setting = () => {
  const navigation = useNavigation();
  const { dispatchAuth } = useAuth();

  const { data: profile, isLoading: isLoadingProfile } = useQuery({
    queryKey: ['myProfile'],
    queryFn: () => getProfile(),
  });

  const handleSignOut = async () => {
    await logout();
    AsyncStorage.removeItem('isLogged');
    dispatchAuth({
      type: 'SIGN_OUT',
    });
  };

  if (isLoadingProfile) {
    return <Spinner />;
  }

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
          onPress={() => navigation.navigate('profile')}
        >
          <Text style={{ fontWeight: 'bold' }}>{profile?.firstname}</Text>
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
          <Card
            name="Feed"
            icon="table"
            onPress={() => navigation.navigate('feed')}
          />
          <Card
            name="Friends"
            icon="user-friends"
            onPress={() => navigation.navigate('request-friends')}
          />
        </View>
        <View style={{ flexDirection: 'row', marginVertical: 5, with: '100%' }}>
          <Card
            name="Watch"
            icon="photo-video"
            onPress={() => navigation.navigate('video')}
          />
          <Card
            name="Profile"
            icon="user-cog"
            onPress={() => navigation.navigate('profile')}
          />
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
