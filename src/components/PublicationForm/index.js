import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './form-publication.scss';
import Button from "../Button";

class PublicationForm extends Component {
  //5a059a03e50ef6543868f33d
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      text: '',
      idTechies: [],
      idUser: '5a04ac2053d35705fcfbc428',
    }
  }

  handleTitle = e => {
    this.setState({ title: e.target.value});
  };

  handleText = e => {
    this.setState({ text: e.target.value});
  };

  submitPost = e => {
    e.preventDefault();
    const { title, text, idTechies, idUser } = this.props;
    this.props.addPost(title,text,idTechies,idUser);
  };

  render() {
    const { title, text } = this.state;

    return (
        <div className="container _margin-top">
          <form action="" onSubmit={this.submitPost} className="form-publication">
            <input
              type="text"
              name="title"
              placeholder="Titulo"
              className="input-title col-sm-12"
              onChange={this.handleTitle}
              value={title}
            />
            <div className="form-publication-informations">
              <div
                className="text-description"
                onChange={this.handleText}
                contentEditable
                value={text}
              />
              <div className="col-sm-12">
                <Button style="-second" title="Postar" icon="send"/>
              </div>
            </div>
          </form>
        </div>
    );
  }
}

PublicationForm.propTypes = {
  addPost: PropTypes.func.isRequired
}

export default PublicationForm;