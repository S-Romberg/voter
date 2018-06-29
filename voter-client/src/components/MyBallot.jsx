import React, { Component } from 'react';
import DeleteUser from './DeleteUser'

class MyBallot extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allCandidates: {},
      myCandidates: {}
    }
  }
  componentDidMount() {
    this.getData()
  }

  getData() {
    const token = window.localStorage.token
    if (token) {
      fetch('https://voterbackend.herokuapp.com/myballot', {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(res => res.json())

        .then(resJSON => this.setState({ myCandidates: resJSON }))
    } else {
      window.location = '/'
    }

  }

  render() {
    return (
      <div>
        <p>MyBallot</p>
        <DeleteUser></DeleteUser>
      </div>
    );
  }
}

export default MyBallot;