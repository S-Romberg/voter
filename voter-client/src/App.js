import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';

import Header from './components/Header'
import Footer from './components/Footer'
import Welcome from './components/Welcome'
import Candidates from './components/Candidates';

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
