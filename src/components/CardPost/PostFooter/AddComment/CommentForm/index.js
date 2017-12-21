import React from 'react';
import Avatar from "../../../../Avatar";

const CommetForm = ({access, postId, postIndex, text, onSubmit, onChange}) => {

  const { user } = access;

  return (
    <form className='add-comment-form' onSubmit={e => onSubmit(e, postId, postIndex)}>
      <Avatar img={user.picture}/>
      <input
        type="text"
        placeholder="Participe da discussão."
        onChange={onChange}
        value={text}
      />
    </form>
  );
};

export default CommetForm;