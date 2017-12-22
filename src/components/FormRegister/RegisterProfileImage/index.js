import React, { Component } from "react";
import { Link } from "react-router-dom";
import { notification } from 'antd';
import Button from "../../Button"

import "./registerProfileImage.scss";

class RegisterProfileImage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            picture: null
        };

        this.onChangePicture = this.onChangePicture.bind(this);
        this.handleSubmitPicture = this.handleSubmitPicture.bind(this);
    }

    onChangePicture = e => {
        this.setState ({
            picture: e.target.files[0]
          })
    };

    handleSubmitPicture = e => {
        e.preventDefault();
        const { picture } = this.state;
        const { registerPicture, access } = this.props;
        const { id } = access.user;
        
        registerPicture(picture, id)
            .then(() => {
              const { history } = this.props;
              history.push('/');
            })
            .catch(() => {
              notification.open({
                message: 'Erro no upload',
                description: 'Houve algum erro ao registrar a imagem, tente novamente.'
              })
            })
    };

    componentDidMount() {
      const { access, history } = this.props;
      if(!access.user){
        history.push('/')
      }
    }

    render() {
        return (
            <div>
                <p>Escolha uma imagem para o seu perfil!</p>
                <form onSubmit={this.handleSubmitPicture} encType="multipart/form-data">
                    <input type="file" name="picture" className="input-file" onChange={this.onChangePicture} />
                    <div className="flex-buttons">
                        <Button classStyle="-second col-sm-3 register-image" title="Salvar" />
                        <Link className="link-no-image" to="/"> Pular </Link>
                    </div>
                </form>
            </div>
        )
    }
}

export default RegisterProfileImage;