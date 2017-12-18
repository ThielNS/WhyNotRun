import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './form-publication.scss';
import FormPublication from "./FormPublication";
import Access from "./Access/index";

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

  openFormPublication = () => {
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

  closeFormPublication = e => {
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
              openFormPublication={this.openFormPublication.bind(this)}
              closeFormPublication={this.closeFormPublication.bind(this)}
            />
          ) : (
            <Access/>
          ) }
        </div>
    );
  }
}

PublicationForm.propTypes = {
  addPost: PropTypes.func.isRequired
};

export default PublicationForm;