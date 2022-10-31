import React from 'react';
import { ScrollView, View } from 'react-native';
import { useTailwind } from 'tailwind-rn/dist';
import BottomSheetTest from '../common/BottomSheet';
import Divider from '../common/Divider';
import Post from '../common/Post';
import Input from '../layout/Input';

const Feed = () => {
  const tw = useTailwind();

  return (
    <ScrollView>
      <View>
        <Input />
        <Divider />

        <Post withPicture={true} />
        <Post />
        <Post withPicture={true} />
        <Post />
      </View>
    </ScrollView>
  );
};

export default Feed;
