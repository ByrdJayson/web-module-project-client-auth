import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './components/Login.js'
function App() {
  return (
    <div className="App">
      <h1>Friends List Test App - Client Auth</h1>
      <Login />
    </div>
  );
}

export default App;
