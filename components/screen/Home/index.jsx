import React from 'react';
import { View } from 'react-native';
import Header from '../../layout/Header';
import BottomTab from '../../navigation/BottomTabNavigator';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

const Home = () => {
  return (
    <BottomSheetModalProvider>
      <View
        style={{
          flex: 1,
        }}
      >
        <Header />
        <BottomTab />
      </View>
    </BottomSheetModalProvider>
  );
};

export default Home;
