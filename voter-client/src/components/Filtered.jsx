import React, { Component } from 'react';
import Cards from './Cards';

class Filtered extends Component {


  render() {
    return (
      <div className='cards'>
        <div className="candidateCards govs">
          {this.createCandidateElements(this.state.govs)} 
        </div> 
      </div>
    );
  }
}

export default Filtered;