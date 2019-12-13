import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link  } from 'react-router-dom';
import Header from '../Header/Header';
import HowFeel from '../HowFeel/HowFeel'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <br/>
        <Router>
        <Route exact path='/' component={HowFeel} />
        </Router>
      </div>
    );
  }
}

export default App;
