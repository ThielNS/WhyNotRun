import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Logo from "../../components/Logo/index";
import FooterLogin from "../../components/FooterLogin/index";
import '../../styles/access.css';


class AccountLayout extends Component {
  componentDidUpdate() {
    window.scrollTo(0,0);
  }

  render() {
    const { Component, ...restProps } = this.props;

    return (
      <main className="access">
        <section className="access-box">
          <header className="access-header">
            <Logo/>
          </header>
          <Route {...restProps} render={Component}/>
          <FooterLogin {...restProps.location}/>
        </section>
      </main>
    );
  }
}

export default AccountLayout;