import React, { Component } from 'react';
import { Link } from "react-router-dom";
import CommentForm from './CommentForm';

class AddComment extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: '',
    }
  }

  changeText = e => {
    this.setState({ text: e.target.value });
  };

  submitComment(e, idPost, postIndex) {
    e.preventDefault();

    const { addComment } = this.props;

    addComment(idPost, postIndex, this.state.text);

    this.setState({ text: '' });
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

    return (
      <div className={`add-comment ${className}`} id={id}>
        {userToken ? (
          <CommentForm
            {...this.props}
            {...this.state}
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

