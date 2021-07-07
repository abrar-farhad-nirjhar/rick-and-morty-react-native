import React from 'react';
import {ApolloProvider} from '@apollo/client';
import client from './lib/apollo';
import DrawerNavigation from './src/components/_root/drawer-navigation';
export default function App() {
  return (
    <ApolloProvider client={client}>
      <DrawerNavigation />
    </ApolloProvider>
  );
}
