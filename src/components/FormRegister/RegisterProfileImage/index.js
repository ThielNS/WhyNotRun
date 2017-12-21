import React, { Component } from "react";
import Button from "../../Button"
import { Link } from "react-router-dom";

import "./registerProfileImage.scss";

class RegisterProfileImage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            picture:null
        }
        this.onChangePicture = this.onChangePicture.bind(this);
        this.handleSubmitPicture = this.handleSubmitPicture.bind(this);
    }

    onChangePicture = e => {
        debugger;
        this.setState ({
            picture: e.target.files[0]
          })
    }

    componentDidMount() {
        const picture = localStorage.getItem('picture');
        if (picture) {
            const { push } = this.props.history;
            push('/');
        }
    }

    handleSubmitPicture = e => {
        e.preventDefault();
        const { picture } = this.state;
        
        this.props.registerPicture(picture)
            .then(() => {
                const { history } = this.props;
                history.push('/');
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {

        return (
            <div>
                <p>Escolha uma imagem para o seu perfil!</p>
                <form onSubmit={this.handleSubmitPicture} encType="multipart/form-data">
                    <input type="file" name="picture" className="input-file" onChange={this.onChangePicture} />
                    <div className="flex-buttons">
                        <Button classStyle="-second col-sm-3 register-image" title="Salvar" />
                        <Link className="link-no-image" to="/register"> Pular </Link>
                    </div>
                </form>
            </div>
        )
    }
}

export default RegisterProfileImage;