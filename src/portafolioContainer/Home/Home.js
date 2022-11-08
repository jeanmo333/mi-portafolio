
import Profile from './profile/Profile';
import "./Home.css"

import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
    <div className="home-container">
           <Profile/>
    </div>
    );
  }
}

