import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Avatar from "../../../Avatar/index";

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

  render () {

    const { id, idPost, postIndex, className } = this.props;
    const { text } = this.state;
    const local = localStorage;
    const token = local.getItem ('userToken');
    const user = JSON.parse (local.getItem ('user'));

    return (
      <div className={`add-comment ${className}`} id={id}>
        {token ? (
          <form className='add-comment-form' onSubmit={e => this.submitComment(e, idPost, postIndex)}>
            <Avatar img={user.picture}/>
            <input
              type="text"
              placeholder="Participe da discussão."
              onChange={this.changeText}
              value={text}
            />
          </form>  
        ) : (
          <div className="col-sm-12 row -center -align-center">
            <h4>Faça login para comentar.</h4>
            <Link to="/login" className="button -second -no-bg"><i className="fa fa-lock"/> Login</Link>
          </div>
        )}
      </div>
    );
  }
}

export default AddComment;

