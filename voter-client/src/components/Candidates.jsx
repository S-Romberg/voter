import React, { Component } from 'react';
import Cards from './Cards';

class Candidates extends Component {
  constructor(){
    super()
    this.state = {
      govs:[], 
      atGen:[], 
      secOfState:[], 
      senD1:[], 
      senD2:[], 
      senD3:[], 
      senD4:[], 
      senD5:[], 
      senD6:[], 
      senD7:[]
    }
    
  }

  filterCandidates(arr){
    let govs = arr.filter(cand =>cand.office == 'governer')
    let atGen = arr.filter(cand =>cand.office == 'attorney general')
    let secOfState = arr.filter(cand =>cand.office == 'secretary of state')
    let senD1 = arr.filter(cand =>cand.office == 'senate district 1')
    let senD2 = arr.filter(cand =>cand.office == 'senate district 2')
    let senD3 = arr.filter(cand =>cand.office == 'senate district 3')
    let senD4 = arr.filter(cand =>cand.office == 'senate district 4')
    let senD5 = arr.filter(cand =>cand.office == 'senate district 5')
    let senD6 = arr.filter(cand =>cand.office == 'senate district 6')
    let senD7 = arr.filter(cand =>cand.office == 'senate district 7')
    this.setState({
      govs, atGen, secOfState, senD1, senD2, senD3, senD4, senD5, senD6, senD7
    })
}

  componentDidMount(){
    fetch(`./store/candidates.js`)
    .then(res => res.json())
    .then(data => this.filterCandidates(data.candidates))
  }

  createCandidateElements(arr){
    return arr.map(candidate => <Cards candidate={candidate} />)
  }

  render() {
    return (
      <div className='cards'>
        <div className="candidateCards govs">
          {this.createCandidateElements(this.state.govs)} 
        </div> 
        <div className="candidateCards atGen">
          {this.createCandidateElements(this.state.atGen)}
        </div>
        <div className="candidateCards secOfState">
          {this.createCandidateElements(this.state.secOfState)} 
        </div>
        <div className="candidateCards senD1">
          {this.createCandidateElements(this.state.senD1)}
        </div>
        <div className="candidateCards senD2">
          {this.createCandidateElements(this.state.senD2)}
        </div>
        <div className="candidateCards senD3">
          {this.createCandidateElements(this.state.senD3)}
        </div>
        <div className="candidateCards senD4">
          {this.createCandidateElements(this.state.senD4)}
        </div>
        <div className="candidateCards senD5">
          {this.createCandidateElements(this.state.senD5)}
        </div>
        <div className="candidateCards senD6">
          {this.createCandidateElements(this.state.senD6)}
        </div>
        <div className="candidateCards senD7">
          {this.createCandidateElements(this.state.senD7)}
        </div>
      </div>
    );
  }
}

export default Candidates;