import React from 'react';
import './App.css';
import Header from './Componenets/Header/Header';
import Home from './Componenets/Home/Home';

const App = () => {
  return (
    <>
    <Header />
    <main className="main">
      <Home />
    </main>
    </>
  );
}

export default App;
