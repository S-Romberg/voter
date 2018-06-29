import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import './App.css';

import Login from './components/Login'
import Signup from './components/Signup'
import Header from './components/Header'
import Footer from './components/Footer'
import Welcome from './components/Welcome'
import Candidates from './components/Candidates';
import MyBallot from './components/MyBallot';
import Resources from './components/Resources';


class App extends Component {
  constructor() {
    super()
    this.state = {
      redirect: false,
      logout: false
    }
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
    this.signUp = this.signUp.bind(this)
  }

  login(email, password) {
    let url = "http://voterbackend.herokuapp.com/"
    let data = { email, password }
    console.log(data)
    fetch(url + "auth/login", {
      method: 'POST',
      headers: new Headers({
        'Content-type': 'application/json'
      }),
      body: JSON.stringify(data)
    }).then(response => response.json())
      .then(data => {
        console.log(data)
        if (data.token) {
          window.localStorage.token = data.token
          this.setState({
            redirect: true
          })
        } else {
          alert(data.error)
        }
      })
  }


  logout() {
    delete window.localStorage.token
    this.setState({ logout: true })
  }

  signUp(email, password) {
    let url = "http://voterbackend.herokuapp.com/"
    let data = { email, password }
    fetch(url + "auth/signup", {
      method: 'POST',
      headers: new Headers({
        'Content-type': 'application/json'
      }),
      body: JSON.stringify(data)
    }).then(response => console.log(response))
      .then(() => this.login(email, password))

  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <main>
                <Route exact path='/' component={() => <Welcome />} />
                <Route path="/login" render={() => (
                  this.state.redirect && !this.state.logout ? (
                    <Redirect to="/myballot" />
                  ) : (
                      <Login login={this.login} logout={this.logout} />
                    )
                )} />
                <Route exact path='/candidates' component={() => <Candidates />} />
                <Route exact path='/myballot' component={() => <MyBallot />} />
                <Route exact path='/resources' component={() => <Resources />} />
                <Route exact path='/signup' render={() => (
                  this.state.redirect && !this.state.logout ? (
                    <Redirect to="/myballot" />
                  ) : (
                      <Signup login={this.login} logout={this.logout} signUp={this.signUp} />
                    )
                )} />
              </main>
            </Switch>
            <Footer />
          </div>

        </BrowserRouter>
      </div>
    );
  }
}

export default App;
