import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';

import Header from './components/Header'
import Footer from './components/Footer'
import Welcome from './components/Welcome'
import Candidates from './components/Candidates';
import MyBallot from './components/MyBallot';
import Resources from './components/Resources';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <main>
              <Route exact path='/' component={() => <Welcome />} />
              <Route exact path='/candidates' component={() => <Candidates />} />
              <Route exact path='/myballot' component={() => <MyBallot />} />
              <Route exact path='/resources' component={() => <Resources />} />
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
