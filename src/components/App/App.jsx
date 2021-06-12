import React from 'react';
import axios from 'axios';
import {Route, HashRouter as Router, Link, usesHistory} from 'react-router-dom'
import './App.css';
import FeedbackForm from '../FeedbackForm/FeedbackForm'
import FeedbackPg from '../FeedbackPg/FeedBackOne.jsx'
function App() {

  return (
    <Router>
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
    </div>
    <div>
      <Route path='/'exact>
        <FeedbackForm/>
      </Route>

      <Route path="/feedback1">
        <FeedbackOne/>
      </Route>

      <Route path="/feedback2">
        <FeedbackTwo/>
      </Route>

      <Route path="/feedback3">
        <FeedbackThree/>
      </Route>

      <Route path="/feedback4">
        <FeedbackFour/>
      </Route>

      <Route path="/feedback5">
        <FeedbackFive/>
      </Route>

      <Route path="/admin">
        <FeedbackAdmin/>
      </Route>

      <Route path="/review">
        <FeedbackReview/>
      </Route>

    </div>
    </Router>
  );
}

export default App;
