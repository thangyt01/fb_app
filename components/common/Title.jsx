import { TouchableOpacity } from '@gorhom/bottom-sheet';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import Divider from './Divider';

const Title = ({ name }) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{
        padding: 10,
        position: 'absolute',
        width: '100%',
      }}
    >
      <View
        style={{ flexDirection: 'row', alignItems: 'center', width: '100%' }}
      >
        <TouchableOpacity>
          <AntDesignIcon name="arrowleft" size={25} />
        </TouchableOpacity>
        <Text
          style={{
            marginHorizontal: 12,
            fontSize: 20,
            fontWeight: '500',
          }}
        >
          {name}
        </Text>
      </View>

      <Divider
        height={1}
        styles={{ marginVertical: 10, marginHorizontal: -10 }}
      />
    </SafeAreaView>
  );
};

export default Title;
