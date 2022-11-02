import React from 'react';
import { Image, ScrollView, View } from 'react-native';
import backgroundImage from '../../../../assets/banner.png';
import Avatar from '../../../common/Avatar';
import Title from '../../../common/Title';
import DataRow from './DataRow';
import DetailItem from './DetailItem';

const EditProfile = () => {
  return (
    <View>
      <Title name="Edit profile" />

      <ScrollView
        style={{
          padding: 10,
          overflow: 'scroll',
          top: 80,
          marginBottom: 100,
        }}
      >
        <DataRow name="Profile">
          <Avatar width={150} height={150} />
        </DataRow>

        <DataRow name="Cover photo">
          <Image
            source={backgroundImage}
            style={{
              borderRadius: 15,
              height: 200,
              width: '100%',
              marginVertical: 10,
            }}
          />
        </DataRow>

        <DataRow name="Details">
          <View
            style={{
              marginVertical: 10,
              width: '100%',
              overflow: 'scroll',
            }}
          >
            <DetailItem icon="clockcircle" content="Joined on January 2017" />
            <DetailItem icon="home" content="Lives in Hanoi" />
            <DetailItem icon="folderopen" content="Work at HUST" />
            <DetailItem icon="heart" content="Relationship with project" />
          </View>
        </DataRow>
      </ScrollView>
    </View>
  );
};

export default EditProfile;
