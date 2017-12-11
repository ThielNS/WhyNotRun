import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { LocaleProvider } from 'antd';
import ptBR from 'antd/lib/locale-provider/pt_BR';

import reducers from './reducers';

import MainLayout from "./layouts/Main";
import AuthenticationLayout from "./layouts/Authentication";
import ErrorLayout from "./layouts/ErrorLayout/index";

import HomePage from "./pages/Home";
import LoginContainer from "./containers/loginContainer";
import RegisterContainer from "./containers/registerContainer";
import Ranking from "./pages/Ranking";
import ErrorPage from "./pages/Error/index";


import './styles/reset.scss';
import './styles/layout.scss';
import './styles/_variables.scss';
import './styles/_helpers.scss';
import './styles/colors.scss';

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk),
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <LocaleProvider locale={ptBR}>
          <Router>
            <Switch>
              <MainLayout exact path="/" component={HomePage} />
              <MainLayout exact path="/ranking" component={Ranking} />
              <AuthenticationLayout exact path="/login" component={LoginContainer} />
              <AuthenticationLayout exact path="/register" component={RegisterContainer} />
              <ErrorLayout path="*" component={ErrorPage} />
            </Switch>
          </Router>
        </LocaleProvider>
      </Provider>
    );
  }
}

export default App;
