import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { getProfile } from '../../apis/auth.api';
import backgroundImage from '../../assets/banner.png';
import Avatar from '../../components/commons/Avatar';
import StyledButton from '../../components/commons/Button';
import Divider from '../../components/commons/Divider';
import Post from '../../components/commons/post';
import Input from '../../components/commons/Input';
import Spinner from '../Spinner';
import Row from '../editProfile/Row';
import formatTime from '../../utils/formatTime';
import Gap from '../../components/commons/Gap';

const Profile = ({ isMe = true }) => {
  const navigation = useNavigation();

  const { data: profile, isLoading: isLoadingProfile } = useQuery({
    queryKey: ['myProfile'],
    queryFn: () => getProfile(),
  });

  if (isLoadingProfile) {
    return <Spinner />;
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}
    >
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
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
              width: '100%',
              marginBottom: 15,
              flexDirection: `${isMe ? 'row' : 'column'}`,
              justifyContent: 'space-between',
            }}
          >
            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>
              {profile?.firstname}
            </Text>
            <Gap size={5} direction="vertical" />
            {isMe ? (
              <StyledButton
                title="Edit profile"
                icon="edit"
                styles={{ paddingVertical: 10 }}
                onPress={() => navigation.navigate('editProfile')}
              />
            ) : (
              <View style={{ flexDirection: 'row' }}>
                <StyledButton
                  title="Add friend"
                  icon="adduser"
                  styles={{ paddingVertical: 10 }}
                />
                <Gap size={10} />
                <StyledButton
                  title="Friend"
                  icon="user"
                  backgroundColor="#E5E7EC"
                  color="black"
                  colorIcon="black"
                  styles={{ paddingVertical: 10 }}
                />
              </View>
            )}
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
            <Row content={formatTime(profile.created_at)} icon="clockcircle" />
            <Row icon="home" content={profile.address} />
            <Pressable onPress={() => navigation.navigate('editProfile')}>
              <Row content="See your About info" icon="ellipsis1" />
            </Pressable>
          </View>

          <Divider height={12} styles={styles.marginHorizontal} />

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

          <Divider height={12} styles={styles.marginHorizontal} />

          <Input styles={styles.marginHorizontal} />

          <Divider height={12} styles={styles.marginHorizontal} />

          <View style={styles.marginHorizontal}>
            <Post />
            <Post />
            <Post />
            <Post />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    height: 200,
    width: '100%',
  },
  marginHorizontal: {
    marginHorizontal: -10,
  },
});

export default Profile;
