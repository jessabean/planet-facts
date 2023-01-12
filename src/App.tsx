import React from 'react';
import logo from './assets/images/logo.svg';
import './App.css';
import { HelmetProvider, Helmet } from 'react-helmet-async'

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <Helmet>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Antonio:wght@500&family=League+Spartan:wght@400;700&display=swap" rel="stylesheet" />
        </Helmet>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    </HelmetProvider>
  );
}

export default App;
