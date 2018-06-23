import React, { Component } from 'react';
import logo from './skip-logo.jpg';
import userIcon from './user-icon.png';
import './Dashboard.css';

import { Link, Match } from 'react-router';
import UserDashboard from './UserDashboard/UserDashboard';

class App extends Component { 
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <label className="title-logo">Analytics Dashboard</label>
          <div className="user-info-container">
            <label className="restaurant-name">Pizza Hut Winnipeg</label>
            <img src={userIcon} className="user-icon" />
          </div>
        </div>
        <UserDashboard />
      </div>
    );
  }
}

export default App;
