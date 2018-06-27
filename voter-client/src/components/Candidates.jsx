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
    let senD1 = arr.filter(cand =>cand.office == 'Senate District 1')
    let senD2 = arr.filter(cand =>cand.office == 'Senate District 2')
    let senD3 = arr.filter(cand =>cand.office == 'Senate District 3')
    let senD4 = arr.filter(cand =>cand.office == 'Senate District 4')
    let senD5 = arr.filter(cand =>cand.office == 'Senate District 5')
    let senD6 = arr.filter(cand =>cand.office == 'Senate District 6')
    let senD7 = arr.filter(cand =>cand.office == 'Senate District 7')
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
      <h2>Govenor</h2>
        <div className="candidateCards govs">
          {this.createCandidateElements(this.state.govs)} 
        </div> 
        <div className="candidateCards atGen">
        <h2>Attorney General</h2>
          {this.createCandidateElements(this.state.atGen)}
        </div>
        <div className="candidateCards secOfState">
        <h2>Secretary Of State</h2>
          {this.createCandidateElements(this.state.secOfState)} 
        </div>
        <div className="candidateCards senD1">
        <h2>Senator District 1</h2>
          {this.createCandidateElements(this.state.senD1)}
        </div>
        <div className="candidateCards senD2">
        <h2>Senator District 2</h2>
          {this.createCandidateElements(this.state.senD2)}
        </div>
        <div className="candidateCards senD3">
        <h2>Senator District 3</h2>
          {this.createCandidateElements(this.state.senD3)}
        </div>
        <div className="candidateCards senD4">
        <h2>Senator District 4</h2>
          {this.createCandidateElements(this.state.senD4)}
        </div>
        <div className="candidateCards senD5">
        <h2>Senator District 5</h2>
          {this.createCandidateElements(this.state.senD5)}
        </div>
        <div className="candidateCards senD6">
        <h2>Senator District 6</h2>
          {this.createCandidateElements(this.state.senD6)}
        </div>
        <div className="candidateCards senD7">
        <h2>Senator District 7</h2>
          {this.createCandidateElements(this.state.senD7)}
        </div>
      </div>
    );
  }
}

export default Candidates;