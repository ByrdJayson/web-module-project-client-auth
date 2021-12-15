import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, BrowserRouter as Router, useHistory, Route, Link , Switch} from 'react-router-dom';
import Login from './components/Login.js'
import FriendsList from './components/FriendsList';
import AddFriends from './components/AddFriends';
import Logout from './components/Logout';
import PrivateRoute from './components/PrivateRoute';
function App(props) {
  




  return (
    <div className="App">
      <h1>Friends List Test App - Client Auth</h1>
        
          <Link to='/friends'>Friends</Link>
          <Link to='/friends/add'>Add a Friend</Link>
        
          <Router>
            
            <Route exact path='/friends/add' component={AddFriends}/>
            <Route exact path='/friends' component={FriendsList}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/logout' component={Logout}/>
          </Router>
      
      
    </div>
  );
}
// TODO SWITCH ABOVE - TRYING TO FIGURE OUT WHY PUSH DOES NOT UPDATE COMPONENTS
export default App;
