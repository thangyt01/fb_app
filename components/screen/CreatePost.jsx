import {
  View,
  Text,
  Button,
  TouchableOpacity,
  TextInput,
  Pressable,
  Image,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import Avatar from '../common/Avatar';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Divider from '../common/Divider';
import { pickImage } from '../../utils/pickImage';

const CreatePost = () => {
  const navigation = useNavigation();

  const [content, setContent] = useState('');

  const [images, setImages] = useState(null);

  const handlePickImage = () => {
    pickImage()
      .then(result => {
        if (!result.cancelled) {
          setImages([result]);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <SafeAreaView
      style={{
        height: '100%',
        padding: 10,
        backgroundColor: 'white',
      }}
    >
      <StatusBar
        barStyle="dark-content"
        backgroundColor="white"
        translucent={true}
      />
      <View style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <AntDesignIcon name="arrowleft" size={25} />
            </TouchableOpacity>

            <Text
              style={{
                marginLeft: 15,
                fontSize: 20,
              }}
            >
              Create post
            </Text>
          </View>

          <Button title="POST" disabled={!content} />
        </View>

        <Divider
          height={1}
          styles={{
            marginVertical: 10,
            marginHorizontal: -10,
          }}
        />

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Avatar size={70} />
          <View
            style={{
              marginLeft: 12,
            }}
          >
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 18,
                marginBottom: 4,
              }}
            >
              Chu Hien
            </Text>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  borderWidth: 1,
                  borderColor: '#e5e7ec',
                  borderRadius: 5,
                  padding: 4,
                }}
              >
                <AntDesignIcon name="earth" size={12} color="gray" />
                <Text
                  style={{
                    fontWeight: '500',
                    color: 'gray',
                    marginHorizontal: 5,
                  }}
                >
                  Public
                </Text>
                <AntDesignIcon name="down" size={12} color="gray" />
              </View>
              <TouchableOpacity
                onPress={handlePickImage}
                style={{ marginLeft: 12 }}
              >
                <AntDesignIcon name="picture" color="#4CAF50" size={30} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View
          style={{
            justifyContent: 'space-between',
            flex: 1,
          }}
        >
          <View
            style={{
              flex: 1,
            }}
          >
            <TextInput
              placeholder="What's on your mind?"
              style={{ fontSize: 20, marginTop: 15 }}
              onChangeText={text => setContent(text)}
              multiline
            />
          </View>
          <View
            style={{
              height: '40%',
            }}
          >
            {images && (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '100%',
                  height: '100%',
                }}
              >
                {images.map(image => (
                  <Image
                    key={image.uri}
                    source={{ uri: image.uri }}
                    style={{
                      height: '100%',
                      width: '100%',
                      borderRadius: 10,
                    }}
                  />
                ))}
              </View>
            )}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CreatePost;
