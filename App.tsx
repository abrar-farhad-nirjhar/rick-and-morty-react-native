import React from 'react';
import MainApp from './src/screens/app';
import {ApolloProvider} from '@apollo/client';
import client from './lib/apollo';
export default function App() {
  return (
    <ApolloProvider client={client}>
      <MainApp />
    </ApolloProvider>
  );
}
