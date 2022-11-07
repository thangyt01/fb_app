import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { TailwindProvider } from 'tailwind-rn';
import MyStacks from './components/navigation/Stacks';
import AuthProvider from './context/AuthContext';
import utilities from './tailwind.json';

export default function App() {
  const client = new QueryClient();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <QueryClientProvider client={client}>
        <TailwindProvider utilities={utilities}>
          <AuthProvider>
            <BottomSheetModalProvider>
              <MyStacks />
            </BottomSheetModalProvider>
          </AuthProvider>
        </TailwindProvider>
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
}
