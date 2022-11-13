import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Comment from '../common/Comment';
import { BottomSheetModal, BottomSheetScrollView } from '@gorhom/bottom-sheet';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

const BottomSheetComment = React.forwardRef(({ data }, ref) => {
  return (
    <BottomSheetModal
      ref={ref}
      snapPoints={['95%']}
      containerStyle={{
        backgroundColor: '#343434cc',
      }}
    >
      <View
        style={{
          backgroundColor: 'white',
          position: 'absolute',
          width: '100%',
          zIndex: 100,
          paddingHorizontal: 15,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingBottom: 10,
          }}
        >
          <View style={{ flexDirection: 'row' }}>
            <AntDesignIcon name="like1" size={18} color="#2374E1" />
            <Text style={{ fontWeight: 'bold', marginHorizontal: 8 }}>
              7.1K
            </Text>
          </View>

          <TouchableOpacity>
            <AntDesignIcon name="like2" size={20} />
          </TouchableOpacity>
        </View>
      </View>

      <BottomSheetScrollView
        showsVerticalScrollIndicator={false}
        style={{
          paddingHorizontal: 10,
          marginTop: 15,
        }}
      >
        <View
          style={{
            marginTop: 20,
          }}
        >
          {data.map((_, index) => (
            <Comment key={index} />
          ))}
        </View>
      </BottomSheetScrollView>
    </BottomSheetModal>
  );
});

export default BottomSheetComment;
