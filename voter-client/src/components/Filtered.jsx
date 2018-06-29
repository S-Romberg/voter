import React, { Component } from 'react';
import Cards from './Cards';



class Filtered extends Component {

  componentDidMount(){
    fetch(`./store/candidates.js`)
    .then(res => res.json())
    .then(data => this.filterCandidates(data.candidates))
  }

  createCandidateElements(arr){
    return arr.map(candidate => <Cards candidate={candidate} />)
  }
  render() {
    console.log(this.state.noGun)
    return (
      <div className='cards'>
        <div className="candidateCards">
          {this.createCandidateElements(this.props.filter)} 
        </div> 
      </div>
    );
  }
}

export default Filtered;