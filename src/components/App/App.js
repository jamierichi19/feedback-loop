import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Header from '../Header/Header';
import HowFeel from '../HowFeel/HowFeel';
import HowUnderstand from '../HowUnderstand/HowUnderstand';
import HowSupport from '../HowSupport/HowSupport';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Success from '../Success/Success'
import Admin from '../Admin/Admin'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <br/>
        <Router>
          <Route exact path='/' component={HowFeel} />
          <Route path='/how-understand' component={HowUnderstand} />
          <Route path='/how-support' component={HowSupport} />
          <Route path='/comments' component={Comments} />
          <Route path='/review' component={Review} />
          <Route path='/success' component={Success} />
          <Route path='/admin' component={Admin} />
        </Router>
      </div>
    );
  }
}

export default App;
