import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, BrowserRouter as Router, useHistory, Route, Link , Switch} from 'react-router-dom';
import Login from './components/Login.js'
import FriendsList from './components/FriendsList';
import AddFriends from './components/AddFriends';
function App(props) {
  const { push } = useHistory();
  const logout = () => {

  }




  return (
    <div className="App">
      <h1>Friends List Test App - Client Auth</h1>
      <nav>
        <Link to={'/friends'}>Friends List</Link>
        <Link to={'/friends/add'}>Add Friend</Link>
      </nav>
      <Router>
        <Switch>
        <Route path='/friends/add' component={AddFriends}/>
        <Route path='/friends' component={FriendsList}/>
        <Route path='/' component={Login}/>
          
          
        </Switch>

      </Router>
      
      
    </div>
  );
}

export default App;
