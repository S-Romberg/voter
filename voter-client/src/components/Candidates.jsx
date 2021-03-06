import React, { Component } from 'react';
import Cards from './Cards';
import Filtered from './Filtered'

class Candidates extends Component {
  constructor() {
    super()
    this.state = {
      govs: [],
      atGen: [],
      secOfState: [],
      senD1: [],
      senD2: [],
      senD3: [],
      senD4: [],
      senD5: [],
      senD6: [],
      senD7: [],
      gunControl: [],
      immigration: [],
      parisAccords: [],
      noGun: [],
      noImm: [],
      noPar: [],
      choice: '',
      chosen: false
    }

  }

  replaceOffice(office) {
    switch (office) {
      case 'governer':
        return 'gov'
      case 'attorney general':
        return 'ag'
      case 'secretary of state':
        return 'sos'
      case 'Senate District 1':
        return 'd1'
      case 'Senate District 2':
        return 'd2'
      case 'Senate District 3':
        return 'd3'
      case 'Senate District 4':
        return 'd4'
      case 'Senate District 5':
        return 'd5'
      case 'Senate District 6':
        return 'd6'
      case 'Senate District 7':
        return 'd7'

    }
  }

  filterCandidates(arr) {
    let govs = arr.filter(cand => cand.office === 'governer')
    let atGen = arr.filter(cand => cand.office === 'attorney general')
    let secOfState = arr.filter(cand => cand.office === 'secretary of state')
    let senD1 = arr.filter(cand => cand.office === 'Senate District 1')
    let senD2 = arr.filter(cand => cand.office === 'Senate District 2')
    let senD3 = arr.filter(cand => cand.office === 'Senate District 3')
    let senD4 = arr.filter(cand => cand.office === 'Senate District 4')
    let senD5 = arr.filter(cand => cand.office === 'Senate District 5')
    let senD6 = arr.filter(cand => cand.office === 'Senate District 6')
    let senD7 = arr.filter(cand => cand.office === 'Senate District 7')
    let gunControl = arr.filter(cand => cand.gunControl === true)
    let immigration = arr.filter(cand => cand.immigration === true)
    let parisAccords = arr.filter(cand => cand.parisAccords === true)
    let noGun = arr.filter(cand => cand.gunControl === false)
    let noImm = arr.filter(cand => cand.immigration === false)
    let noPar = arr.filter(cand => cand.parisAccords === false)
    this.setState({
      govs, atGen, secOfState, senD1, senD2, senD3, senD4, senD5, senD6, senD7, gunControl, immigration, parisAccords, noGun, noImm, noPar
    })
  }

  replaceOffice(office) {
    switch (office) {
      case 'governer':
        return 'gov'
      case 'attorney general':
        return 'ag'
      case 'secretary of state':
        return 'sos'
      case 'Senate District 1':
        return 'd1'
      case 'Senate District 2':
        return 'd2'
      case 'Senate District 3':
        return 'd3'
      case 'Senate District 4':
        return 'd4'
      case 'Senate District 5':
        return 'd5'
      case 'Senate District 6':
        return 'd6'
      case 'Senate District 7':
        return 'd7'

    }
  }

  componentDidMount() {
    fetch(`http://voterbackend.herokuapp.com/candidates`)
      .then(res => res.json())
      .then(data => this.filterCandidates(data.allCandidates))
  }

  createCandidateElements(arr) {
    return arr.map(candidate => <Cards office={this.replaceOffice(candidate.office)} candidate={candidate} key={candidate.id} addToBallot={this.props.addToBallot} />)
  }

  changeChoice = (event) => {
    event.preventDefault()
    this.setState({
      choice: event.target.name,
      chosed: true
    })

  }

  render() {
    return (
      <div>
        {this.state.chosen ?
          <Filtered choice={this.state.choice} /> :
          <div className='cards'>
            <select onChange={this.changeChoice}>
              <option value='immigration' >Immigration</option>
              <option value='gunControl' >Gun Control</option>
              <option value='parisAccords' >Paris Accord</option>
              <option value='noImm' >Border Protection</option>
              <option value='noGun' >Anti Gun Control</option>
              <option value='noPar' >Anti Paris Accord</option>
            </select>
            <h2>Governor</h2>
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
        }
      </div>
    );
  }
}

export default Candidates;