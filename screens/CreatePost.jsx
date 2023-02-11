import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Button,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import { pickImage } from '../utils/pickImage';
import Avatar from '../components/commons/Avatar';

const CreatePost = () => {
  const navigation = useNavigation();

  const [content, setContent] = useState('');

  const [images, setImages] = useState(null);

  const handlePickImage = () => {
    pickImage()
      .then(result => {
        console.log({ result });
        if (!result.cancelled) {
          setImages([result]);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <Button title="POST" disabled={!content} />,
    });
  }, [content, navigation]);

  return (
    <SafeAreaView
      style={{
        padding: 10,
        backgroundColor: 'white',
        flex: 1,
      }}
    >
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
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

          <Text style={{ color: '#0778E9' }}>{content.length} / 150</Text>
        </View>

        <View>
          <View>
            <TextInput
              placeholder="What's on your mind?"
              style={{ fontSize: 20, marginTop: 15 }}
              onChangeText={text => setContent(text)}
              multiline
              maxLength={150}
              autoFocus
            />
          </View>
          <View style={{ marginTop: 20 }}>
            {images &&
              images.map(image => (
                <View key={image.uri}>
                  <Image
                    source={{ uri: image.uri }}
                    style={{
                      flex: 1,
                      aspectRatio: image.width / image.height,
                      borderRadius: 10,
                    }}
                  />

                  <TouchableOpacity
                    style={{
                      position: 'absolute',
                      top: 8,
                      right: 8,
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: 30,
                      height: 30,
                      borderRadius: 1000,
                      backgroundColor: '#eeee',
                    }}
                    onPress={() => setImages([])}
                  >
                    <AntDesignIcon name="close" size={25} color="gray" />
                  </TouchableOpacity>
                </View>
              ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreatePost;
