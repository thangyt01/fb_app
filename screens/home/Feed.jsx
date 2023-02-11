import React from 'react';
import { ScrollView, View } from 'react-native';
import Divider from '../../components/commons/Divider';
import Post from '../../components/commons/post';
import Input from '../../components/commons/Input';

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
