import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { TailwindProvider } from 'tailwind-rn';
import AuthNavigator from './components/navigation/AuthNavigator';
import utilities from './tailwind.json';

export default function App() {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <TailwindProvider utilities={utilities}>
        <AuthNavigator />
      </TailwindProvider>
    </QueryClientProvider>
  );
}
