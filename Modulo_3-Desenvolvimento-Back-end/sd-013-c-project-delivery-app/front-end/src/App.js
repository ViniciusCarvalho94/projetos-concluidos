import React from 'react';
import './App.css';
import Provider from './context/Provider';
import Routes from './routes';

function App() {
  return (
    <Provider>
      <Routes />
    </Provider>
  );
}

export default App;
