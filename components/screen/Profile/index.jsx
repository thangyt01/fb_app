import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import backgroundImage from '../../../assets/banner.png';
import Avatar from '../../common/Avatar';
import StyledButton from '../../common/Button';
import Divider from '../../common/Divider';
import Post from '../../common/Post';
import Title from '../../common/Title';
import DetailItem from './Edit/DetailItem';

const Profile = () => {
  const navigation = useNavigation();

  return (
    <>
      <Pressable onPress={() => navigation.goBack()}>
        <Title name="Profile" />
      </Pressable>
      <ScrollView
        style={{ flex: 1, top: 70 }}
        showsVerticalScrollIndicator={false}
      >
        <View>
          <Image
            source={backgroundImage}
            style={styles.backgroundImage}
            resizeMode="cover"
          />

          <Avatar
            size={150}
            styles={{
              position: 'absolute',
              bottom: '-20%',
              left: 10,
            }}
          />
        </View>

        <View
          style={{
            marginTop: 40,
            padding: 10,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
              marginBottom: 15,
            }}
          >
            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Conan</Text>
            <Pressable onPress={() => navigation.navigate('EditProfile')}>
              <StyledButton
                title="Edit profile"
                icon="edit"
                styles={{ paddingVertical: 10 }}
              />
            </Pressable>
            {/* <StyledButton title="Add friend" icon="adduser" /> */}
            {/* <StyledButton
              title="Friend"
              icon="user"
              backgroundColor="#E5E7EC"
              color="black"
              colorIcon="black"
            /> */}
          </View>
          <Divider
            height={12}
            styles={{
              marginHorizontal: -10,
            }}
          />
        </View>

        <View
          style={{
            padding: 10,
          }}
        >
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
            }}
          >
            Details
          </Text>

          <View
            style={{
              marginVertical: 10,
            }}
          >
            <DetailItem content="Joined at January 15th" icon="clockcircle" />
            <DetailItem icon="home" content="Lives in Hanoi" />
            <Pressable onPress={() => navigation.navigate('EditProfile')}>
              <DetailItem content="See your About info" icon="ellipsis1" />
            </Pressable>
          </View>

          <Divider
            height={12}
            styles={{
              marginHorizontal: -10,
            }}
          />

          <View
            style={{
              marginVertical: 15,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                }}
              >
                Friends
              </Text>
              <Text
                style={{
                  color: '#2270DC',
                }}
              >
                Find Friends
              </Text>
            </View>

            <Text>192 friends</Text>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
                marginTop: 10,
              }}
            >
              <Image
                source={backgroundImage}
                style={{ width: '30%', height: 100, borderRadius: 10 }}
                resizeMode="cover"
              />
              <Image
                source={backgroundImage}
                style={{ width: '30%', height: 100, borderRadius: 10 }}
                resizeMode="cover"
              />
              <Image
                source={backgroundImage}
                style={{ width: '30%', height: 100, borderRadius: 10 }}
                resizeMode="cover"
              />
            </View>
          </View>

          <Divider height={12} styles={{ marginHorizontal: -10 }} />

          <View style={{ marginHorizontal: -10 }}>
            <Post />
            <Post withPicture />
            <Post />
            <Post />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    height: 200,
    width: '100%',
  },
});

export default Profile;
