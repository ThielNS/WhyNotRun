import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import './form-publication.scss';
import FormPublication from "./FormPublication";

class PublicationForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      classChange: {
        informations: '',
        inputTitle: '',
        button: '',
        formPublication: '',
        bgFormPublication: ''
      }
    }
  }

  showInformations = () => {
    this.setState ({
      classChange: {
        informations: '-show',
        inputTitle: '-border-radius-none',
        button: '-show',
        formPublication: '-actived',
        bgFormPublication: '-show'
      }
    });
  };

  closeInformations = e => {
    e.preventDefault();
    this.setState({ classChange: {} });
  };

  render() {

    const { classChange } = this.state;
    const { access, addPost } = this.props;
    const { userToken } = access;

    const containerStyle = classChange.informations ? {zIndex: 5} : {zIndex: 3};


    return (
        <div className="container _margin-top _relative" style={containerStyle}>
          {userToken ? (
            <FormPublication
              {...this.state}
              access={access}
              addPost={addPost}
              classChange={classChange}
              showInformations={this.showInformations.bind(this)}
              closeInformations={this.closeInformations.bind(this)}
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