import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from    'react-router-dom'
import GridBg from './components/ui/GridBg.jsx'
import { ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

const client = new ApolloClient({
  //todo=>update uri on production
  uri: 'http://localhost:4000/graphql',//URL of graphql serever
  cache: new InMemoryCache(),
  credentials :"include",
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <GridBg>
      <ApolloProvider client={client}>
    <App />
    </ApolloProvider>
    </GridBg>
    </BrowserRouter>
  </React.StrictMode>
);
