import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    return (
      <div className='welcome'>
        <div className='images'>
          <img src='./assets/republican.png' alt='republican logo'/>
          <img src='./assets/independent.jpg' alt='independent logo'/>
          <img  src='./assets/demo.png' alt='democrat logo'/>  
        </div>
          <h1 className>Welcome To Voter</h1>
          <div className='paragraph'>
          <p>Voter is a platform that connects users with their congressional candidates.
             The goal of Voter is to make the voting process easier and more accessable by giving users the information they need to make educated choices about who to vote for in upcoming elections. By helping voters get the information they need we can encourage voters to get out and let their voices be heard! </p>
        </div>
      </div>
    );
  }
}

export default Welcome;