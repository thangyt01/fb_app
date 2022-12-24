import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Text, View } from 'react-native';
import facebookLogo from '../../../assets/banner.png';
import StyledButton from '../../layouts/Button';

const Start = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        padding: 10,
        paddingTop: 15,
        justifyContent: 'space-between',
        backgroundColor: 'white',
      }}
    >
      <View>
        <Image source={facebookLogo} style={{ width: '100%', height: '50%' }} />
        <Text style={{ marginVertical: 15 }}>
          Create an account to connect with friends, family and communities of
          people who share your interests.
        </Text>
      </View>

      <StyledButton
        onPress={() => navigation.navigate('inputName')}
        title="Get Started"
        fontSize={16}
        styles={{
          paddingVertical: 14,
        }}
      />
    </View>
  );
};

export default Start;
