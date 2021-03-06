import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    return (
      <div>
      <div className='welcome'>
          <h1 className='welcomeLogo'>Welcome To Voter</h1>
          <div className='paragraph'>
          <p>Voter is a platform that connects users with their congressional candidates.
             The goal of Voter is to make the voting process easier and more accessible by giving users the information they need to make educated choices about who to vote for in upcoming elections. By helping voters get the information they need we can encourage voters to get out and let their voices be heard! </p>
        </div>
        </div>
        <div className='howTo'>
        <h3 className='howToH2'>How It Works</h3>
        <div className='list'>
        <div className='li'>
          <h3 className='listHeader'>01<span> Explore your candidates</span></h3>
          <p>Explore each candidates platforms and major issues.</p>
        </div>
        <div className='li'>
          <h3 className='listHeader'>02<span> Make Informed Choices</span></h3>
          <p>Voter makes it easy to make informed decisions on important issues in your district & state.</p>
        </div>
        <div className='li'>
          <h3 className='listHeader'>03<span> Vote!</span></h3>
          <p>Voter allows you to save your choices so you have them ready to go at the polls.</p>
        </div>
        </div>
        </div>
        </div>
      
    );
  }
}

export default Welcome;