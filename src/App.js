import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

import reducers from './reducers';

import MainLayout from "./layouts/Main";
import AuthenticationLayout from "./layouts/Authentication";

import HomePage from "./pages/Home";
import LoginContainer from "./containers/loginContainer";
import RegisterContainer from "./containers/registerContainer";

import './styles/reset.scss';
import './styles/layout.scss';
import './styles/_variables.scss';
import './styles/_helpers.scss';
import './styles/colors.scss';
import ErrorPage from "./pages/Error/index";
import ErrorLayout from "./layouts/ErrorLayout/index";

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
            <MainLayout exact path="/" component={HomePage} />
            <AuthenticationLayout exact path="/login" component={LoginContainer} />
            <AuthenticationLayout exact path="/register" component={RegisterContainer} />
            <ErrorLayout path="*" component={ErrorPage} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
