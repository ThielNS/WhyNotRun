import React, { Component } from 'react';
import { Route } from "react-router-dom";
import '../../styles/access.scss';

//TODO: Decidir nome do AuthenticationLayout
class AuthenticationLayout extends Component {

  componentDidUpdate() {
    window.scrollTo(0,0);
  }

  render() {
    const { Component, ...restProps } = this.props;

    return (
      <main className="access">
        <section className="access-box">
          <Route {...restProps} render={Component}/>
        </section>
      </main>
    );
  }
}

export default AuthenticationLayout;