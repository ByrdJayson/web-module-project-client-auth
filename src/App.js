import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './components/Login.js'
import FriendsList from './components/FriendsList';
import AddFriends from './components/AddFriends';
function App() {
  return (
    <div className="App">
      <h1>Friends List Test App - Client Auth</h1>
      
      <Router>
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route path='/friendsList' component={FriendsList}/>
          <Route path='/addFriends' component={AddFriends}/>
        </Switch>

      </Router>
      
      
    </div>
  );
}

export default App;
