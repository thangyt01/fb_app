import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TailwindProvider } from 'tailwind-rn';
import Home from './components/screen/Home';
import Login from './components/screen/Login';
import Search from './components/screen/Search';
import utilities from './tailwind.json';

export default function App() {
	const client = new QueryClient();
	const Stack = createNativeStackNavigator();

	return (
		<QueryClientProvider client={client}>
			<TailwindProvider utilities={utilities}>
				<NavigationContainer>
					<Stack.Navigator initialRouteName="Login">
						<Stack.Screen name="Search" component={Search} />
						<Stack.Screen name="Home" component={Home} />
						<Stack.Screen
							name="Login"
							component={Login}
							options={{
								headerShown: false,
							}}
						/>
					</Stack.Navigator>
				</NavigationContainer>
			</TailwindProvider>
		</QueryClientProvider>
	);
}
