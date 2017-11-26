import React  from 'react';
import { Route } from "react-router-dom";
import NavBar from '../../components/Navbar/index'

class DefaultLayout extends React.Component {

  componentDidUpdate() {
    window.scrollTo(0,0);
  }

  render() {
    const { Component, ...restProps} = this.props;

    return (
      <div>
        <NavBar/>
        <Route {...restProps} render={Component}/>
      </div>
    );
  }
}

export default DefaultLayout;