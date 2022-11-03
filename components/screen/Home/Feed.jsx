import React from 'react';
import { ScrollView, View } from 'react-native';
import Divider from '../../common/Divider';
import Post from '../../common/Post';
import Input from '../../layout/Input';

const Feed = () => {
  return (
    <ScrollView>
      <View>
        <Input />
        <Divider />

        <Post withPicture={true} />
        <Post withPicture={true} />
        <Post withPicture={true} />
        <Post withPicture={true} />
        {/* <Post /> */}
        {/* <Post withPicture={true} /> */}
        {/* <Post /> */}
      </View>
    </ScrollView>
  );
};

export default Feed;
