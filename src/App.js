import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Technologies from "./pages/Technologies";
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
            <Route exact path="/" component={Home} />
            <Route path="/technologies" component={Technologies}/>
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
