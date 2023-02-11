import React, { useEffect, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';
import { Button, Image, ScrollView, Text, View } from 'react-native';
import { getProfile } from '../../apis/auth.api';
import backgroundImage from '../../assets/banner.png';
import BottomSheetEditProfile from '../../components/sheets/BottomSheetEditProfile';
import Avatar from '../../components/commons/Avatar';
import Spinner from '../Spinner';
import Section from './Section';
import Row from './Row';
import formatTime from '../../utils/formatTime';

const EditProfile = () => {
  const navigation = useNavigation();
  const editProfileRef = useRef(null);

  const { data: profile, isLoading: isLoadingEditProfile } = useQuery({
    queryKey: ['myProfile'],
    queryFn: () => getProfile(),
  });

  if (isLoadingEditProfile) {
    return <Spinner />;
  }

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          title="Edit"
          color="#2270DC"
          onPress={() => {
            editProfileRef.current.present();
          }}
        />
      ),
    });
  }, []);

  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <ScrollView
        style={{
          padding: 10,
        }}
        showsVerticalScrollIndicator={false}
      >
        <Section name="Name">
          <Text style={{ fontSize: 20 }}>{profile.firstname}</Text>
        </Section>

        <Section name="Profile">
          <Avatar size={150} />
        </Section>

        <Section name="Cover photo">
          <Image
            source={backgroundImage}
            style={{
              borderRadius: 15,
              height: 200,
              width: '100%',
              marginVertical: 10,
            }}
          />
        </Section>

        <Section name="Details">
          <View
            style={{
              marginVertical: 10,
              width: '100%',
              overflow: 'scroll',
            }}
          >
            <Row icon="clockcircle" content={formatTime(profile.created_at)} />
            <Row icon="home" content={profile.address} />
            <Row icon="folderopen" content="Work at HUST" />
          </View>
        </Section>

        <Section name="Links">
          <View
            style={{
              marginVertical: 10,
              width: '100%',
              overflow: 'scroll',
            }}
          >
            <Row icon="twitter" content={profile.link_twitter} />
            <Row icon="github" content={profile.link_github} />
          </View>
        </Section>
      </ScrollView>

      <BottomSheetEditProfile
        ref={editProfileRef}
        snapPoints={['95%']}
        title="Edit profile"
        data={[
          {
            icon: 'user',
            field: 'name',
            value: profile.firstname,
          },
          {
            icon: 'home',
            field: 'address',
            value: profile.address,
          },
          {
            icon: 'laptop',
            field: 'company',
            value: 'HUST', // them company
          },
          {
            icon: 'twitter',
            field: 'twitter',
            value: profile.link_twitter,
          },
          {
            icon: 'github',
            field: 'github',
            value: profile.link_github,
          },
        ]}
      ></BottomSheetEditProfile>
    </View>
  );
};

export default EditProfile;
