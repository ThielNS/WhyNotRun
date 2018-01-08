import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { notification } from 'antd';
import Button from "../Button/index";

class FormRegister extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      profession: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleConfirmPass = this.handleConfirmPass.bind(this);
    this.handleProfession = this.handleProfession.bind(this);
  }

  handleSubmit = e => {

    e.preventDefault();

    const { name, email, password, confirmPassword, profession } = this.state;
    const { registerUser, loginAuthentication } = this.props;

    if (password === confirmPassword) {
      registerUser(name, email, password, confirmPassword, profession)
        .then(() => {
          loginAuthentication(email, password)
            .then(() => {
              const { history } = this.props;
              history.push({
                pathname: '/registerImage',
                state: { email: email, password: password }
              });
            })
        })
        .catch((error) => {
          console.log(error);
        })
    } else {
      notification.open({
        message: 'Erro ao Registrar',
        description: 'Senhas não correspondem.'
      });

      this.setState({
        password: '',
        confirmPassword: ''
      })
    }
  };

  handleName = e => {
    this.setState({
      name: e.target.value
    })
  };
  handleEmail = e => {
    this.setState({
      email: e.target.value
    })
  };
  handlePassword = e => {
    this.setState({
      password: e.target.value
    })
  };
  handleProfession = e => {
    this.setState({
      profession: e.target.value
    })
  };
  handleConfirmPass = e => {
    this.setState({
      confirmPassword: e.target.value
    })
  };

  componentDidMount() {
    const user = localStorage.getItem('user');
    if (user) {
      const { push } = this.props.history;
      push('/registerImage');
    }
  }

  render() {

    const { name, email, password, confirmPassword, profession } = this.state;

    return (
      <div>
        <header className="access-header">
          <h2>Participe do WhyNotRun</h2>
        </header>
        <form
          action=""
          method="post"
          className="access-form"
          onSubmit={this.handleSubmit}
          autoComplete="off"
        >
          <input
            type="text"
            name="name"
            placeholder="Nome Completo"
            onChange={this.handleName}
            value={name}
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            onChange={this.handleEmail}
            value={email}
          />
          <input
            type="text"
            name="work"
            placeholder="Profissão"
            onChange={this.handleProfession}
            value={profession}
          />
          <input
            type="password"
            name="password"
            placeholder="Senha"
            onChange={this.handlePassword}
            value={password}
          />
          <input
            type="password"
            name="repeatPassword"
            placeholder="Repetir Senha"
            onChange={this.handleConfirmPass}
            value={confirmPassword}
          />
          <div className="options-register">
            <Button classStyle="-second col-sm-5" title="Próximo" icon="" />
            <Link to="/login" className="back-signin">Já tenho conta.</Link>
          </div>
        </form>
      </div>
    );
  }
}


export default FormRegister;