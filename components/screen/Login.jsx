import React from 'react';
import { Image, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTailwind } from 'tailwind-rn/dist';
import facebookLogo from '../../assets/facebook-logo.png';
import StyledButton from '../common/Button';

const Login = () => {
	const tw = useTailwind();

	return (
		<SafeAreaView style={tw('bg-white h-full px-8')}>
			<View>
				<View style={tw('mb-28 mt-8')}>
					<Image
						source={facebookLogo}
						style={tw('w-32 h-32 mb-36 self-center')}
					/>
					<TextInput
						placeholder="Phone or email"
						style={tw('py-1 border-b border-[#AAAAAA] mb-4')}
					/>
					<TextInput
						placeholder="Password"
						style={tw('py-1 border-b border-[#AAAAAA] mb-6')}
					/>
					<StyledButton title="Login" bg="bg-[#007AFF]" />
				</View>

				<View>
					<Text style={tw('self-center underline')}>
						Forgotten the password ?
					</Text>
					<Text style={tw('self-center font-bold uppercase my-2')}>Or</Text>
					<StyledButton title="Create a new account" bg="bg-[#A4C939]" />
				</View>
			</View>
		</SafeAreaView>
	);
};

export default Login;
