import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './components/Login.js'
import FriendsList from './components/FriendsList';
function App() {
  return (
    <div className="App">
      <h1>Friends List Test App - Client Auth</h1>
      <Login path='/'/>
      <BrowserRouter>
        <Routes>
          <Route path='/friendsList' component={FriendsList}/> 
          
        </Routes>  

      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
