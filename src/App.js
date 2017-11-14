import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

import reducers from './reducers';

import DefaultLayout from "./layouts/Default";
import AccountLayout from "./layouts/Account";

import HomePage from "./pages/Home";
import LoginContainer from "./containers/loginContainer";
import RegisterContainer from "./containers/registerContainer";

import './styles/reset.css';
import './styles/layout.css';
import './styles/colors.css';


// Error in
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk),
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <DefaultLayout exact path="/" component={HomePage} />
            <AccountLayout path="/login" component={LoginContainer} />
            <AccountLayout path="/register" component={RegisterContainer} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
