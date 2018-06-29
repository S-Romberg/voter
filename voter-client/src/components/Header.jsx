import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <div className='logo'>Voter</div>
        <nav className='navBar'></nav>
        <div className='logIn'><a href='/login'>Log In</a></div>
        <ul className='pages'>
          <Link to='/'>Home</Link>
          <Link to='/candidates'>Candidate Information</Link>
          <Link to='/myballot'>My Ballot</Link>
          <Link to='/resources'>Voter Resources</Link>
        </ul>
      </div>
    );
  }
}

export default Header;