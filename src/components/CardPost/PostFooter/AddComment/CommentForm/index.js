import React, { Component } from 'react';
import Avatar from "../../../../Avatar";

class CommentForm extends Component {

  componentDidUpdate() {
    const { focus } = this.props;

    if (focus)
      this.textInput.focus();
  }

  render() {

    const {access, postId, postIndex, text, onSubmit, onChange} = this.props;
    const { user } = access;

    return (
      <form
        className='add-comment-form'
        onSubmit={e => onSubmit(e, postId, postIndex)}
      >
        <Avatar img={user.picture}/>
        <input
          type="text"
          ref={input => { this.textInput = input}}
          placeholder="Participe da discussão."
          onChange={onChange}
          value={text}
        />
      </form>
    );
  }
}

export default CommentForm;