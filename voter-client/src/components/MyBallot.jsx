import React, { Component } from 'react';
import DeleteUser from './DeleteUser'
import Cards from './Cards'

class MyBallot extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     allCandidates: {},
  //     loaded: false
  //   }
  // }
  // componentDidMount() {
  //   this.getData()
  // }

  // getData() {
  //   const token = window.localStorage.token
  //   if (token) {
  //     fetch('https://voterbackend.herokuapp.com/candidates', {
  //       method: "GET"
  //     }).then(res => res.json())
  //       .then(resJSON => this.setState({ 
  //         allCandidates: resJSON,
  //         loaded: true
  //        }))
  //   } else {
  //     window.location = '/'
  //   }

  // }

  // getMyBallot = () => {
  //   var mapped = this.state.allCandidates.allCandidates.map(cand => {
  //     console.log(this.props.myCandidates)
  //     for(var anything in this.props.myCandidates){
  //       console.log(cand.id)
  //       if(cand.id === this.props.myCandidates){
  //         console.log('hello: ',cand)
  //         return cand
  //       }
  //     }
  //   })
  //   console.log('mapped: ',mapped)
  //   this.createCandidateElements(mapped)
  // }

  // createCandidateElements(arr){
  //   return arr.map(candidate => <Cards candidate={candidate} key={candidate.id} addToBallot={this.props.addToBallot}/>)
  // }

  render() {
    console.log(this.props)
    return (
      <div>
        {/* {this.state.loaded && this.getMyBallot()} */}
        <DeleteUser></DeleteUser>
      </div>
    );
  }
}

export default MyBallot;