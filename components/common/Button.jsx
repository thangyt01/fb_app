/* eslint-disable react/prop-types */
/* eslint-disable react-native/no-color-literals */
import React from 'react';
import { Pressable, Text, TouchableOpacity } from 'react-native';
import { useTailwind } from 'tailwind-rn/dist';

const StyledButton = ({ onPress, title, bg }) => {
	const tw = useTailwind();

	return (
		<Pressable
			style={tw(`${bg} items-center justify-center py-3.5 rounded-full`)}
			onPress={onPress}
		>
			<TouchableOpacity style={tw('w-full items-center')}>
				<Text style={tw('text-white uppercase font-bold')}>{title}</Text>
			</TouchableOpacity>
		</Pressable>
	);
};

export default StyledButton;
