import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { TailwindProvider } from 'tailwind-rn';
import MyStacks from './components/navigation/Stacks';
import AuthProvider from './context/AuthContext';
import utilities from './tailwind.json';

export default function App() {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <TailwindProvider utilities={utilities}>
        <AuthProvider>
          <MyStacks />
        </AuthProvider>
      </TailwindProvider>
    </QueryClientProvider>
  );
}
