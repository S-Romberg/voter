import React, { Component } from 'react';

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
      fetch('http://localhost:3000/user/myballot', {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(res => res.json())
        .then(resJSON => this.setState({ myCandidates: resJSON }))
    } else {
      window.location = '/'
    }

  }

  render() {
    // console.log(this.state.myCandidates[0]);

    return (
      <div>
        <p>MyBallot</p>
      </div>
    );
  }
}

export default MyBallot;