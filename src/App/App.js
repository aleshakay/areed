import React from 'react';
import logo from './logo.svg';
import NavBar from '../components/shared/NavBar/NavBar';
import Home from '../components/pages/Home/Home';
import './App.scss';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
