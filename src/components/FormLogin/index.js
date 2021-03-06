import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from "react-router-dom";
import { notification } from 'antd';
import Button from "../Button/index";


class FormLogin extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  formSubmit = e => {
    e.preventDefault();

    const { email, password } = this.state;
    const {loginAuthentication} = this.props;

    loginAuthentication(email, password)
    .then(() => {
      const { history } = this.props;
      history.push('/');
    })
    .catch(() => {
      notification.error({
        message: 'Erro ao fazer login',
        description: 'Houve algum erro inesperado, tente novamente.'
      })
    });
  };

  changeEmail = e => {
    this.setState({ email: e.target.value });
  };

  changePassword = e => {
    this.setState({ password: e.target.value });
  };

  componentWillMount() {
    const { access } = this.props;
    const { userToken } = access;

    if (userToken) {
      return (<Redirect to='/'/>);
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
          onSubmit={this.formSubmit}
        >
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={email}
            onChange={this.changeEmail}
          />
          <input
            type="password"
            name="password"
            placeholder="Senha"
            value={password}
            onChange={this.changePassword}
          />
          <div className="row -space-between -align-center">
            <Button classStyle="-second col-sm-5" title="Entrar" icon="lock" type="submit" />
            <Link to="/login/forget">Esqueceu a senha?</Link>
          </div>
        </form>
        <footer className="access-footer">
          <p>
            <Link to="/register"> Não tem conta? Crie uma, ou não. </Link>
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