import { View, Text, Keyboard } from 'react-native';
import React, { useState } from 'react';
import Avatar from '../Avatar';

const Comment = ({
  author = 'Conan',
  avatarUrl,
  createdAt = '12m',
  content = 'reply comment',
  onReply,
}) => {
  const [liked, setLiked] = useState(false);

  return (
    <View
      style={{
        flexDirection: 'row',
        marginVertical: 10,
        justifyContent: 'space-between',
      }}
    >
      <Avatar size={40} />

      <View
        style={{
          marginHorizontal: 8,
          flex: 1,
          alignItems: 'flex-start',
        }}
      >
        <View
          style={{
            backgroundColor: '#EEEDEE',
            padding: 8,
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 15,
            }}
          >
            Conan
          </Text>

          <Text>
            {Math.floor(Math.random() * 10) % 2
              ? content
              : ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab saepe pariatur architecto officia aperiam dolorum iure dignissimos, explicabo, sequi voluptatibus a veniam adipisci maiores neque et nobis quisquam eveniet nemo.'}
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            width: '40%',
            justifyContent: 'space-between',
          }}
        >
          <Text>{createdAt}</Text>
          {liked ? (
            <Text
              style={{
                fontWeight: 'bold',
                color: '#3673cb',
              }}
              onPress={() => setLiked(false)}
            >
              Like
            </Text>
          ) : (
            <Text
              style={{
                fontWeight: 'bold',
              }}
              onPress={() => setLiked(true)}
            >
              Like
            </Text>
          )}
          <Text
            style={{
              fontWeight: 'bold',
            }}
            onPress={() => {
              console.log('1');
              onReply('@ChuHien ');
            }}
          >
            Reply
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Comment;
