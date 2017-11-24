import React from 'react';
import Button from '../../../Button';
import Avatar from "../../../Avatar/index";

const AddComment = () => {

  return (
    <div className="add-comment">
      <form className='add-comment-form'>
        <Avatar/>
        <input type="text" placeholder="Participe da discussão."/>
      </form>
    </div>
  );
}

export default AddComment;

