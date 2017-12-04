import React, { Component } from 'react';
import Button from "../Button/index";


class FormRegister extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      profession: '',
      password: '',
      confirmPassword: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleConfirmPass = this.handleConfirmPass.bind(this);
    this.handleProfession = this.handleProfession.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault();

    const { dispatch } = this.props;
    const { name, email, password, profession, confirmPassword } = this.state;

    if (password == confirmPassword) {
      this.props.registerUser(name, email, password, profession, confirmPassword)
        .then(() => {
          const { history } = this.props;
          console.log('Success')
          history.push('/');
        })
        .catch((error) => {
          console.log(error);
        })
    } else {
      console.log('Senha inválida.');
    }

  }

  handleName = e => {
    this.setState({
      name: e.target.value
    })
  }
  handleEmail = e => {
    this.setState({
      email: e.target.value
    })
  }
  handlePassword = e => {
    this.setState({
      password: e.target.value
    })
  }
  handleProfession = e => {
    this.setState({
      profession: e.target.value
    })
  }
  handleConfirmPass = e => {
    this.setState({
      confirmPassword: e.target.value
    })
  }
  componentDidMount() {
    const user = localStorage.getItem('user');
    if (user) {
      const { push } = this.props.history;
      push('/login');
    }
  }

  render() {
    return (
      <div>
        <header className="access-header">
          <h2>Participe do WhyNotRun</h2>
        </header>
        <form action="" method="post" className="access-form" onSubmit={this.handleSubmit}>
          <input type="text" name="name" placeholder="Nome Completo" onChange={this.handleName} />
          <input type="email" name="email" placeholder="E-mail" onChange={this.handleEmail} />
          <input type="text" name="work" placeholder="Profissão" onChange={this.handleProfession} />
          {/* <label className="-title">
          <span>Foto de perfil:</span>
          </label>
          <input type="file" name="photo" /> */}
          <input type="password" name="password" placeholder="Senha" onChange={this.handlePassword} />
          <input type="password" name="repeatPassword" placeholder="Repetir Senha" onChange={this.handleConfirmPass} />
          <Button style="-second col-sm-5" title="Registrar-se" icon="" />
        </form>
      </div>
    );
  }
}

export default FormRegister;