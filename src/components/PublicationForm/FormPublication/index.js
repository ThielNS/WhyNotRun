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
    this.setState({
      classChange: {
        informations: '',
        inputTitle: '',
        button: '',
        formPublication: '',
        bgFormPublication: ''
      },
      placeholderInput: 'Crashou? diga sobre.'
    });
  };

  render() {

    const {title, text, classChange, placeholderInput, placeholderText, access, handleTecnologies} = this.props;
    const { userToken, user } = access;

    const formPublicationClass = `form-publication ${classChange.formPublication}`;

    return (
      <div>
        <div
          onClick={this.closeInformations}
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
              onFocus={this.showInformations}
              value={ title }
            />
            <button
              onClick={this.closeInformations}
              className={`button ${classChange.button}`}
            ><i className="fa fa-times"/></button>
          </div>
          <div className={classChange.informations ? `form-publication-informations ${classChange.informations}` : 'form-publication-informations'}>
            <div className={`text-description-placeholder ${text.length > 0 ? `-hide` : ``}`}>
              {placeholderText}
            </div>
            <ContentEditable
              className="text-description"
              html={text}
              disabled={false}
              onChange={this.handleText}
            />
            <AddTechnologiesContainer handleTecnologies={handleTecnologies}/>
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