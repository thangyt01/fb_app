import React from 'react';
import { Text, View } from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

const StyledButton = ({
  onPress,
  title,
  backgroundColor = '#2270DC',
  color = 'white',
  borderRadius = 10,
  icon,
  colorIcon = 'white',
  styles,
}) => {
  return (
    <View
      style={{
        backgroundColor,
        paddingHorizontal: 15,
        borderRadius,
        alignItems: 'center',
        justifyContent: icon ? 'space-between' : 'center',
        flexDirection: 'row',
        ...styles,
      }}
    >
      {icon ? <AntDesignIcon name={icon} size={20} color={colorIcon} /> : null}
      <Text
        style={{
          color,
          fontSize: 16,
          fontWeight: 'bold',
          marginLeft: 10,
        }}
      >
        {title}
      </Text>
    </View>
  );
};

export default StyledButton;
