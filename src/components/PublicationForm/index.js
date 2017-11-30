import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './form-publication.scss';
import Button from "../Button";
import Avatar from "../Avatar/index";
import AddTechnologys from "./AddTechnologys";
import { Link } from "react-router-dom";

class PublicationForm extends Component {
  //5a059a03e50ef6543868f33d
  constructor(props) {
    super(props);
    this.state = {
      publication: {
        title: '',
        text: 'Relate sua experiencia',
        idTechies: [],
        idUser: '5a04ac2053d35705fcfbc428',
      },
      classChange: {},
      placeholderInput: 'Bugou? diga sobre.',
    }
  }

  handleTitle = e => {
    this.setState({ publication: { title: e.target.value } });
  };

  handleText = e => {
    this.setState({ text: e.target.value});
  };

  submitPost = e => {
    e.preventDefault();
    const { title, text, idTechies, idUser } = this.props;
    this.props.addPost(title,text,idTechies,idUser);
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


  componentDidMount() {
    if(this.refs.meuComp){
      this.refs.meuComp.contentEditable = true;
    }
  }
  render() {

    const { publication, classChange, placeholderInput } = this.state;
    const token = localStorage.getItem('userToken');
    const user = JSON.parse(localStorage.getItem('user'));

    return (
        <div className="container _margin-top">
          {token ? (
            <div>
              <div
                onClick={this.closeInformations}
                className={classChange.bgFormPublication ? `bg-form-publication ${classChange.bgFormPublication}` : 'bg-form-publication'}
              />
              <form autoComplete="off" action="" onSubmit={this.submitPost} className={classChange.formPublication ? `form-publication ${classChange.formPublication}` : 'form-publication'}>
                <div
                  className={classChange.inputTitle ? `input-title ${classChange.inputTitle}` : 'input-title'}
                >
                  <Avatar img={user.picture}/>
                  <input
                    type="text"
                    name="title"
                    placeholder={placeholderInput}
                    className="col-sm-12"
                    onChange={this.handleTitle}
                    onFocus={this.showInformations}
                    value={publication.title}
                  />
                  <button
                    onClick={this.closeInformations}
                    className={classChange.button ? `button ${classChange.button}` : 'button'}
                  ><i className="fa fa-times"/></button>
                </div>
                <div className={classChange.informations ? `form-publication-informations ${classChange.informations}` : 'form-publication-informations'}>
                  <div
                    className="text-description"
                    onChange={this.handleText}
                    ref="meuComp"
                    children={publication.text}
                  />
                  <AddTechnologys/>
                  <div className="col-sm-12 row -flex-end _padding">
                    <Button style="-second" title="Postar" icon="send"/>
                  </div>
                </div>
              </form>
            </div>
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