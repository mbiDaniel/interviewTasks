import React from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import App from '../App';
export default function Apollo() {

    const client = new ApolloClient({
        uri: 'http://localhost:8000/',
        cache: new InMemoryCache(),
      });

  return (
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
  )
}
