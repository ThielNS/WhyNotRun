import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from "../Button/index";
import { Link } from "react-router-dom";


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
    const {loginAuthentication} = this.props;

    loginAuthentication(email, password)
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

  componentDidMount() {
    const token = localStorage.getItem('userToken');
    if(token) {
      const { push } = this.props.history;
      push('/');
    }
  }

  render() {

    const { email, password } = this.state;

    return (
      <div>
        <header className="access-header">
          <h2>Login</h2>
        </header>
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
          <div className="row -space-between -align-center">
            <Button style="-second col-sm-5" title="Entrar" icon="lock" type="submit"/>
            <Link to="/login/forget">Esqueceu a senha?</Link>
          </div>
        </form>
        <footer className="access-footer">
          <p>
            <Link to="/register">Não tem conta? Crie uma, ou não.</Link>
          </p>
        </footer>
      </div>
    );
  }
}

FormLogin.propTypes = {
  loginAuthentication: PropTypes.func.isRequired
};

export default FormLogin;