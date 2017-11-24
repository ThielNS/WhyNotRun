import React from 'react';
import { Route, Switch } from "react-router-dom";
import FormLogin from '../../components/FormLogin';
import Logo from "../../components/Logo";
import FooterLogin from "../../components/FooterLogin";
import FormRegister from "../../components/FormRegister";
import '../../styles/access.css';

const Access = (props) => (
  <main className="access">
    <section className="access-box">
      <header className="access-header">
        <Logo/>
      </header>
      <Switch>
        <Route path="/login" component={FormLogin} />
        <Route path="/register" component={FormRegister} />
      </Switch>
      <FooterLogin {...props.location}/>
    </section>
  </main>
);

export default Access;