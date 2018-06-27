import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <div className='logo'>Voter</div>
        <nav className='navBar'></nav>
        <div className='logIn'><a>Log In</a></div> 
          <ul className='pages'>
              <li><a href='/'>Home</a></li>
              <li><a href='/candidates'>Candidate Information</a></li>
              <li><a href='/myballot'>My Ballot</a></li>
              <li><a href='/resources'>Voter Resources</a></li>
          </ul>
     </div>
    );
  }
}

export default Header;