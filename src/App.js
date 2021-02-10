import React, { useEffect, useHistory } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WelcomePg from './components/WelcomePg';
import GamePg from './components/GamePg';
import ProfilePg from './components/ProfilePg';
import CongratulationPg from './components/CongratulationPg';
import RecordsPg from './components/RecordsPg';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={WelcomePg}></Route>
        <Route path="/welcome" component={WelcomePg}></Route>
        <Route path="/game" component={GamePg}></Route>
        <Route path="/profile" component={ProfilePg}></Route>
        <Route path="/congratulations"></Route>
        <Route path="/records"></Route>
      </Switch>
    </Router>
  );
}

export default App;