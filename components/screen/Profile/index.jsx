import { TouchableOpacity } from '@gorhom/bottom-sheet';
import React from 'react';
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import backgroundImage from '../../../assets/banner.png';
import Avatar from '../../common/Avatar';
import StyledButton from '../../common/Button';
import Divider from '../../common/Divider';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import Post from '../../common/Post';

const Profile = () => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View>
        <Image
          source={backgroundImage}
          style={styles.backgroundImage}
          resizeMode="cover"
        />

        <Avatar
          width={150}
          height={150}
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
          <StyledButton title="Edit profile" />
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
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 10,
            }}
          >
            <AntDesignIcon name="clockcircle" size={20} />
            <Text style={{ marginHorizontal: 10 }}>Joined on January 2017</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <AntDesignIcon name="ellipsis1" size={20} />
            <Text style={{ marginHorizontal: 10 }}>See your About info</Text>
          </View>
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
            }}
          >
            <Image
              source={backgroundImage}
              style={{ width: '30%', height: 100 }}
              resizeMode="cover"
            />
            <Image
              source={backgroundImage}
              style={{ width: '30%', height: 100 }}
              resizeMode="cover"
            />
            <Image
              source={backgroundImage}
              style={{ width: '30%', height: 100 }}
              resizeMode="cover"
            />
          </View>
        </View>

        <Divider height={12} />

        <View style={{ marginHorizontal: -10 }}>
          <Post />
          <Post withPicture />
          <Post />
          <Post />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    height: 200,
    width: '100%',
  },
});

export default Profile;
