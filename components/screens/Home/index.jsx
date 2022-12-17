import React from 'react';
import { View } from 'react-native';
import Header from '../../layouts/Header';
import BottomTab from '../../navigations/BottomTabNavigator';

const Home = () => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Header />
      <BottomTab />
    </View>
  );
};

export default Home;
