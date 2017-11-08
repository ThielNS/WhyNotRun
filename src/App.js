import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./pages/Home";

import './styles/reset.css';
import './styles/layout.css';
import './styles/colors.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
