import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import Test from '../../../assets/banner.png';

const Body = () => {
  return (
    <View
      style={{
        marginTop: 10,
      }}
    >
      <Text
        style={{
          textAlign: 'justify',
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat culpa
        exercitationem, amet necessitatibus ipsam explicabo? Deserunt fuga
        facere magnam mollitia odio! Facere est quibusdam sint alias excepturi
        fugiat doloremque nemo.
      </Text>

      <Image source={Test} resizeMode="cover" style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 300,
    width: 'auto',
    marginHorizontal: -10,
  },
});

export default Body;
