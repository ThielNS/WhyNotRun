import React, { Component } from 'react';
import ContentEditable from 'react-contenteditable';
import { notification } from 'antd'
import Button from "../../Button";
import Avatar from "../../Avatar";
import AddTechnologiesContainer from '../../../containers/AddTechnologiesContainer';

class FormPublication extends Component {

  constructor(props) {

    super(props);
    this.state = {
      title: '',
      text: '',
      technologies: [],
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

  handleTechnologies = (listTechs) => {
    this.setState({ technologies: listTechs });
  };

  changePlaceholder = () => {
    this.props.openFormPublication();
    this.setState({ placeholderInput: 'Título da publicação' });
  };

  message = text => {
    notification.open({
      message: 'Publicação',
      description: text,
    });
  };

  validFilds = () => {

    const { title, text, technologies } = this.state;

    if (!title || !text) {
      this.message('Preencha todos os campos');
      return;
    } else if (technologies.length === 0) {
      this.message('Selecione pelo menos uma tecnologia');
      return;
    } else {
      return true;
    }
  };

  submitPost = e => {

    const { title, text, technologies } = this.state;
    const { access, addPost, listPosts } = this.props;
    const { user } = access;

    if (this.validFilds()) {

      const data = {
        title: title,
        text: text,
        techies: technologies,
        userId: user.id,
      };

      addPost(data)
        .then(() => {
          listPosts(1)
        });
    }

    this.setState({
      title: '',
      text: '',
      technologies: [],
    });
  };

  close = e => {
    e.preventDefault();

    this.setState({ placeholderInput: 'Bugou? diga sobre.' });
    this.props.closeFormPublication(e);
  };

  submitClose = e => {
    this.submitPost(e);
    this.close(e);
  };

  render() {

    const { title, text, placeholderText, placeholderInput } = this.state;
    const { classChange, access } = this.props;
    const { user } = access;

    const formPublicationClass = `form-publication ${classChange.formPublication}`;
    const formPublicationInformationClass = classChange.informations ? classChange.informations : '';
    const hidePlaceholderDescription = text.length > 0 ? '-hide' : '';

    return (
      <div>
        <div
          onClick={this.close}
          className={`bg-form-publication ${classChange.bgFormPublication}`}
        />
        <form autoComplete="off" action="" className={formPublicationClass}>
          <div
            className={`input-title ${classChange.inputTitle}`}
          >
            <Avatar img={user.picture}/>
            <input
              type="text"
              name="title"
              placeholder={ placeholderInput }
              className="col-sm-12"
              onChange={this.handleTitle}
              onFocus={this.changePlaceholder}

              value={ title }
            />
            <button
              onClick={this.close}
              className={`button ${classChange.button}`}
            ><i className="fa fa-times"/></button>
          </div>
          <div className={`form-publication-informations ${formPublicationInformationClass}`}>
            <div className={`text-description-placeholder ${hidePlaceholderDescription}`}>
              {placeholderText}
            </div>
            <ContentEditable
              className="text-description"
              html={text}
              disabled={false}
              onChange={this.handleText}
            />
            <AddTechnologiesContainer handleTechnologies={this.handleTechnologies.bind(this)}/>
            <div className="col-sm-12 row -flex-end _padding">
              <Button classStyle="-second" title="Postar" icon="send" onClick={this.submitClose}/>
            </div>
          </div>
        </form>
      </div>
    );
  }

}

export default FormPublication;