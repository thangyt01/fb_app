import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

const StyledButton = ({
  onPress,
  title,
  fontSize,
  styles,
  icon,
  disable,
  backgroundColor = '#2270DC',
  color = 'white',
  borderRadius = 10,
  colorIcon = 'white',
}) => {
  const renderContent = (
    <View
      style={{
        backgroundColor,
        paddingHorizontal: 16,
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
          fontSize: fontSize,
          fontWeight: 'bold',
          marginLeft: 10,
        }}
      >
        {title}
      </Text>
    </View>
  );

  if (disable) {
    return <View>{renderContent}</View>;
  }

  return <TouchableOpacity onPress={onPress}>{renderContent}</TouchableOpacity>;
};

export default StyledButton;
