import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link  } from 'react-router-dom';
import Header from '../Header/Header';
import HowFeel from '../HowFeel/HowFeel'
import HowUnderstand from '../HowUnderstand/HowUnderstand'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <br/>
        <Router>
        <Route exact path='/' component={HowFeel} />
        <Route path='/how-understand' component={HowUnderstand} />
        </Router>
      </div>
    );
  }
}

export default App;
