import React, { Component } from 'react';
import Button from "../Button/index";


class FormRegister extends Component {
  render() {
    return (
      <form action="" method="post" className="access-form">
        <input type="text" name="name" placeholder="Nome Completo"/>
        <input type="email" name="email" placeholder="E-mail" />
        <input type="text" name="work" placeholder="Profissão" />
        <label className="-title">
          <span>Foto de perfil:</span>
        </label>
        <input type="file" name="photo" />
        <input type="password" name="password" placeholder="Senha" />
        <input type="password" name="repeatPassword" placeholder="Repetir Senha" />
        <Button style="-default" title="Registrar-se"/>
      </form>
    );
  }
}

export default FormRegister;