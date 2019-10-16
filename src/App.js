import React from 'react';
import logo from './octopus_hex.svg';
import './App.css';
import Menu from './components/Menu';
import DrinkCreate from './components/DrinkCreate'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Menu/>
      </header>
    </div>
  );
}

export default App;
