import React, { Component } from 'react';
import {Link} from 'react-router';

export default class Navbar extends Component {
  render() {
    return (
      <nav className='navbar'>
        <div className='navbar-item'>
          <Link to='index'>Dreamlike Days</Link>
        </div>
        <div className='navbar-item'>
          <Link to='home'>Home</Link>
        </div>
        <div className='navbar-item'>
          <Link to='entries'>Entries</Link>
        </div>
      </nav>
    )
  }
}
