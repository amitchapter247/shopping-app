import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './App.css';
import Register from './container/signup';


class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
              <Route path="/signup" component={Register} />
            </Switch>
      </Router>
    )
  }
}
export default App;
