import { View, Text } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn/dist';

const Home = () => {
	const tw = useTailwind();

	return (
		<View>
			<Text style={tw('text-blue-500')}>Hello React Native</Text>
		</View>
	);
};

export default Home;
