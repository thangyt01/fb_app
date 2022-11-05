import React from 'react';
import { View } from 'react-native';
import Divider from '../Divider';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';

const Post = () => {
  return (
    <>
      <View
        style={{
          backgroundColor: 'white',
          padding: 10,
        }}
      >
        <Header />
        <Body />
        <Footer />
      </View>
      <Divider />
    </>
  );
};

export default Post;
