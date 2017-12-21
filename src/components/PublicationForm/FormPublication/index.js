import React, { Component } from 'react';
import ContentEditable from 'react-contenteditable';
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

  submitPost = e => {
    const { title, text, technologies } = this.state;
    const { user } = this.props.access;

    const posting = {
      title: title,
      text: text,
      techies: technologies,
      userId: user.id,
    };

    this.props.addPost(posting);
  };

  close = e => {
    e.preventDefault();

    this.setState({ placeholderInput: 'Bugou? diga sobre.' });
    this.props.closeFormPublication(e);
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
        <form autoComplete="off" action="" onSubmit={this.submitPost} className={formPublicationClass}>
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
            <AddTechnologiesContainer handleTechnologies={this.handleTechnologies}/>
            <div className="col-sm-12 row -flex-end _padding">
              <Button classStyle="-second" title="Postar" icon="send" onClick={this.submitPost}/>
            </div>
          </div>
        </form>
      </div>
    );
  }

}

export default FormPublication;