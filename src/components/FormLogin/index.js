import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from "../Button/index";


class FormLogin extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    const { email, password } = this.state;

    this.props.loginAuthentication(email, password)
    .then(() => {
      const { history } = this.props;
      history.push('/');
    })
    .catch(() => {
      console.log('Erro ao Fazer login');
    });
  };

  handleEmail = e => {
    this.setState({ email: e.target.value });
  };

  handlePassword = e => {
    this.setState({ password: e.target.value });
  };

  render() {

    const { email, password } = this.state;

    return (
      <form
        method="post"
        className="access-form"
        onSubmit={this.handleSubmit}
      >
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={email}
          onChange={this.handleEmail}
        />
        <input
          type="password"
          name="password"
          placeholder="Senha"
          value={password}
          onChange={this.handlePassword}
        />
        <Button style="-default" title="Login" type="submit"/>
      </form>
    );
  }
}

FormLogin.propTypes = {
  loginAuthentication: PropTypes.func.isRequired
};

export default FormLogin;