import React  from 'react';
import { Route } from "react-router-dom";

class ErrorLayout extends React.Component {

  componentDidUpdate() {
    window.scrollTo(0,0);
  }

  render() {
    const { Component, ...restProps} = this.props;

    return (
      <div>
        <Route {...restProps} render={Component}/>
      </div>
    );
  }
}

export default ErrorLayout;