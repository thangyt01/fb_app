import React from 'react';
import { View } from 'react-native';
import Header from '../../layout/Header';
import BottomTab from '../../navigation/BottomTabNavigator';

const Home = () => {
  return (
    <>
      <View
        style={{
          flex: 1,
        }}
      >
        <Header />
        <BottomTab />
      </View>
    </>
  );
};

export default Home;
