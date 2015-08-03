import React, { Component } from 'react';
import { RouteHandler } from 'react-router';

import Navbar from './Navbar';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Navbar />
        <div className='app-text'>
          Welcome to Dreamlike Days.
        </div>
        <RouteHandler />
      </div>
    );
  }
}
