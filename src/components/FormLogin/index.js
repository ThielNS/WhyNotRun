import React, { Component } from 'react';
import Button from "../Button/index";


class FormLogin extends Component {
  render() {
    return (
      <form action="" method="post" className="access-form">
        <input type="email" name="email" placeholder="E-mail" />
        <input type="password" name="password" placeholder="Senha" />
        <Button style="-default" title="Login"/>
      </form>
    );
  }
}

export default FormLogin;