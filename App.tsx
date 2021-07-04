import React from 'react';
import {ApolloProvider} from '@apollo/client';
import client from './lib/apollo';
import Navigation from './src/components/_root/navigation';
export default function App() {
  return (
    <ApolloProvider client={client}>
      <Navigation />
    </ApolloProvider>
  );
}
