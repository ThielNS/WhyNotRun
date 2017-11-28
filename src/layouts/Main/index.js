import React  from 'react';
import { Route } from "react-router-dom";
import NavBarContainer from '../../containers/NavBarContainer';

class DefaultLayout extends React.Component {

  componentDidUpdate() {
    window.scrollTo(0,0);
  }

  render() {
    const { Component, ...restProps} = this.props;

    return (
      <div>
        <NavBarContainer/>
        <Route {...restProps} render={Component}/>
      </div>
    );
  }
}

export default DefaultLayout;