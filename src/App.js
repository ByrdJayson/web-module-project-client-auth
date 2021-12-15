import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, BrowserRouter as Router, useHistory, Route, Link , Switch} from 'react-router-dom';
import Login from './components/Login.js'
import FriendsList from './components/FriendsList';
import AddFriends from './components/AddFriends';
function App(props) {
  const logout = () => {

  }




  return (
    <div className="App">
      <h1>Friends List Test App - Client Auth</h1>
        
          <Link to='/friends'>Friends</Link>
          <Link to='/friends/add'>Add a Friend</Link>
        
          <Router>
            
            <Route path='/friends/add' component={AddFriends}/>
            <Route path='/friends' component={FriendsList}/>
            <Route path='/login' component={Login}/>

          </Router>
      
      
    </div>
  );
}

export default App;
