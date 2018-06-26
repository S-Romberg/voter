import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <div className='logo'>Voter</div>
        <nav className='navBar'></nav>
        <div className='logIn'><a>Log In</a></div> 
          <ul className='pages'>
              <li>Home</li>
              <li>Candidate Information</li>
              <li>My Ballot</li>
              <li>Voter Resources</li>
          </ul>
     </div>
    );
  }
}

export default Header;