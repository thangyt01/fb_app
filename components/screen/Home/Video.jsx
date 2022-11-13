import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Video = () => {
  return (
    <View style={[styles.flexCenter, styles.background]}>
      <Text>Video</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'white',
  },
  flexCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Video;
