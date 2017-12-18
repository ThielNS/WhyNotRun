import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import './form-publication.scss';
import FormPublication from "./FormPublication";

class PublicationForm extends Component {

  constructor(props) {

    super(props);
    this.state = {
      title: '',
      text: '',
      technologies: [],
      idUser: (localStorage.getItem('user'))? JSON.parse(localStorage.getItem('user')).id : null,
      classChange: {
        informations: '',
        inputTitle: '',
        button: '',
        formPublication: '',
        bgFormPublication: ''
      },
      placeholderInput: 'Bugou? diga sobre.',
      placeholderText: 'Relate sua experiencia',
    }
  }

  handleTitle = e => {
    this.setState({ title: e.target.value });
  };

  handleText = e => {
    this.setState({ text: e.target.value});
  };

  handleTecnologies = (listTechs) => {
    this.setState({ technologies: listTechs });
  };

  submitPost = e => {
    const { title, text, technologies, idUser } = this.state;

    const posting = {
      title: title,
      text: text,
      techies: technologies,
      userId: idUser
    };

    this.props.addPost(posting);
  };

  showInformations = () => {
    this.setState ({
      classChange: {
        informations: '-show',
        inputTitle: '-border-radius-none',
        button: '-show',
        formPublication: '-actived',
        bgFormPublication: '-show'
      },
      placeholderInput: 'Qual é o assunto que te deixa furioso? :/'
    });
  };

  closeInformations = e => {
    e.preventDefault();
    this.setState({ classChange: {}, placeholderInput: 'Crashou? diga sobre.'});
  };

  render() {

    const { classChange } = this.state;
    const { access } = this.props;
    const { userToken } = access;

    const containerStyle = classChange.informations ? {zIndex: 5} : {zIndex: 3};


    return (
        <div className="container _margin-top _relative" style={containerStyle}>
          {userToken ? (
            <FormPublication
              {...this.state}
              {...access}
              handleTecnologies={this.handleTecnologies.bind(this)}
            />
          ) : (
            <div className="row -align-center -direct-column _padding-bottom">
              <h3 className="_margin-bottom _color-white">Participe da discução, Faça Login, ou crie uma conta!</h3>
              <div>
                <Link to="/register" className="button -second">
                  <i className="fa fa-address-card-o"/> Registrar-se
                </Link>
                <Link to="/login" className="button -default -no-bg">
                  <i className="fa fa-address-card-o"/> Login
                </Link>
              </div>
            </div>
          ) }
        </div>
    );
  }
}

PublicationForm.propTypes = {
  addPost: PropTypes.func.isRequired
};

export default PublicationForm;