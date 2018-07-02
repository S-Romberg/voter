import React, { Component } from 'react';
import DeleteUser from './DeleteUser'
import Cards from './Cards'

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

  createCandidateElements() {
    const arr = [{
      "id": 1,
      "name": "Mike Johnston",
      "office": "governer",
      "party": "democrat",
      "src": "https://www.mikejohnstonforcolorado.com/",
      "img": "https://www.mikejohnstonforcolorado.com/static/aedf4497ab8fd6c0b46386a6a864979b-72357c896c2e80575e7796735d40658b-6f312.jpg",
      "p1": "Citizens eligible for two years of debt-free tuition",
      "p2": "All children and pregnant women are covered, colorado health care program, fight for more health care cost transparency.",
      "p3": "Ban high-cap magazines, universal background checks, ban bump stocks, Gun Violence Restraining Orders",
      "immigration": true,
      "gunControl": true,
      "parisAccords": true
    }, {
      "id": 9,
      "name": "Joe Salazar",
      "office": "attorney general",
      "party": "democrat",
      "src": "https://salazarforcoag.com/",
      "img": "https://api.ballotpedia.org/v3/thumbnail/200/300/crop/best/Joseph_Salazar.jpg",
      "p1": "Rep. Salazar has pledged to 'bring bills to go after the oil and gas companies' and to 'support those who bring bills to go after the oil and gas companies, ' because if he did not, 'that would relegate me to the depths of hell.'",
      "p2": "'I will protect our undocumented families as well as our citizen families here in the state of Colorado from being terrorized by the Trump administration.If that means that I have to sue local governments as well as the state government that are trying to assist in federal immigration enforcement, I will do that.'",
      "p3": "Has vowed to uphold and enforce Colorado's 2013 gun control lawsexpanding background checks and banning high-capacity magazines. He is supportive of a so-called 'red flag law, ' a ban on bump stocks and a ban on assault weapons.",
      "immigration": true,
      "gunControl": true,
      "parisAccords": true
    }, {
      "id": 19,
      "name": "Peter Yu",
      "office": "Senate District 2",
      "party": "Republican",
      "src": "https://www.peteryuforcongress.com/",
      "img": "https://api.ballotpedia.org/v3/thumbnail/200/300/crop/best/Peter_Yu.jpg",
      "p1": "America should be energy independent, cheaper energy all around government has no say in climate change, its in the peoples hands",
      "p2": "Affordable care act has failed our nation, nation should steer clear from socialized healthcare",
      "p3": "",
      "immigration": true,
      "gunControl": true,
      "parisAccords": true
    }, {
      "id": 24,
      "name": "Arn Menconi",
      "office": "Senate District 3",
      "party": "Democrat",
      "src": "http://arnmenconi.com/",
      "img": "https://api.ballotpedia.org/v3/thumbnail/200/300/crop/best/Arn_Menconi.png",
      "p1": "end wars and denuclearize America ",
      "p2": "increase minimum wage to 15 / hour",
      "p3": "Ban fracking, solar first",
      "immigration": true,
      "gunControl": true,
      "parisAccords": true
    }]

    return arr.map(candidate => <Cards candidate={candidate} key={candidate.id} addToBallot={this.props.addToBallot} />)
  }

  render() {
    return (
      <div className="holder">
        <h2>MyBallot</h2>
        {/* <div className="candidateCards govs"> */}
        {this.createCandidateElements()}
        {/* </div> */}
        <DeleteUser></DeleteUser>
      </div>
    );
  }
}

export default MyBallot;