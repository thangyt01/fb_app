import React, { Fragment, useState } from 'react';
import { View } from 'react-native';
import Divider from '../Divider';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';

const Post = ({ likes = 100, comments = 171, shares = 3 }) => {
  return (
    <Fragment>
      <View
        style={{
          backgroundColor: 'white',
          padding: 10,
        }}
      >
        <Header />
        <Body />
        <Footer likes={likes} comments={comments} shares={shares} />
      </View>
      <Divider />
    </Fragment>
  );
};

export default Post;
