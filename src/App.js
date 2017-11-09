import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import Home from "./pages/Home";
import Access from "./pages/Access";
import reducers from './reducers';

import './styles/reset.css';
import './styles/layout.css';
import './styles/colors.css';


// Error in
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk),
)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Access} />
            <Route path="/register" component={Access} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
