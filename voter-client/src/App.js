import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';

import Cards from './components/Cards'
import Header from './components/Header'
import Footer from './components/Footer'
import Welcome from './components/Welcome'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <main>
              <Route exact path='/welcome' component={() => <Welcome />} />
              <Route exact path='/' component={() => <Cards />} />
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
