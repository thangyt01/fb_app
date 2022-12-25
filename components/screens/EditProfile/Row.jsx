import React from 'react';
import { Text, View } from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

const DetailItem = ({ icon, content }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
      }}
    >
      <AntDesignIcon name={icon} size={20} />
      <Text style={{ marginHorizontal: 10 }}>{content}</Text>
    </View>
  );
};

export default DetailItem;
