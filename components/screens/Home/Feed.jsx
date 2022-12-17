import React from 'react';
import { ScrollView, View } from 'react-native';
import Divider from '../../layouts/Divider';
import Post from '../../layouts/Post';
import Input from '../../layouts/Input';

const Feed = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
      <View>
        <Input />
        <Divider />
        {[...Array(20).keys()].map((_, i) => (
          <Post key={i} />
        ))}
      </View>
    </ScrollView>
  );
};

export default Feed;
