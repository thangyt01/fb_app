import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TailwindProvider } from 'tailwind-rn';
import Home from './components/screen/Home';
import utilities from './tailwind.json';

export default function App() {
	const client = new QueryClient();
	const Stack = createNativeStackNavigator();

	return (
		<QueryClientProvider client={client}>
			<TailwindProvider utilities={utilities}>
				<NavigationContainer>
					<Stack.Navigator>
						<Stack.Screen name="Home" component={Home} />
					</Stack.Navigator>
				</NavigationContainer>
			</TailwindProvider>
		</QueryClientProvider>
	);
}
