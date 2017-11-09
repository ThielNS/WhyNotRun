import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import reducers from './reducers';
import Technologies from "./pages/Technologies";
import Home from "./pages/Home";
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';


import './styles/reset.css';
import './styles/layout.css';
import './styles/colors.css';

let store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
)


class App extends Component {
  render() {
    return (
      <Provider store={store}>
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
