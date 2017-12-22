import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { notification } from 'antd';
import CommentForm from './CommentForm';

class AddComment extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: '',
    }
  }

  message = () => {
    notification.open({
      message: 'Erro ao comentar!',
      description: 'Informe um texto a ser enviado.',
    });
  };

  changeText = e => {
    this.setState({ text: e.target.value });
  };

  submitComment(e, idPost, postIndex) {
    e.preventDefault();

    const { addComment } = this.props;
    const { text } = this.state;

    if (!text) {
      this.message();
    } else {
      addComment(idPost, postIndex, this.state.text);
      this.setState({ text: '' });
    }

  }

  renderAccess = () => {
    return (
      <div className="col-sm-12 row -center -align-center">
        <h4>Faça login para comentar.</h4>
        <Link to="/login" className="button -second -no-bg"><i className="fa fa-lock"/> Login</Link>
      </div>
    );
  };

  render () {

    const { id, className, access } = this.props;
    const { userToken } = access;
    const focus = !!className;

    return (
      <div className={`add-comment ${className}`} id={id}>
        {userToken ? (
          <CommentForm
            {...this.props}
            {...this.state}
            focus={focus}
            onSubmit={this.submitComment.bind(this)}
            onChange={this.changeText.bind(this)}
          />
        ) :
          this.renderAccess()
        }
      </div>
    );
  }
}

export default AddComment;

