import { View, Text, Button, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import Avatar from '../common/Avatar';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Divider from '../common/Divider';

const CreatePost = () => {
  const navigation = useNavigation();

  const [content, setContent] = useState('');

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
      <View>
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
          <Avatar width={70} height={70} />
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
          </View>
        </View>

        <View>
          <TextInput
            placeholder="What's on your mind?"
            style={{ fontSize: 20, marginTop: 15 }}
            onChangeText={text => setContent(text)}
            multiline
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CreatePost;
