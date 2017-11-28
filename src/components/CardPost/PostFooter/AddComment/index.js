import React from 'react';
import Button from '../../../Button';
import Avatar from "../../../Avatar/index";

const AddComment = ({ id, className }) => {

  return (
    <div className={`add-comment ${className}`} id={id}>
      <form className='add-comment-form'>
        <Avatar/>
        <input type="text" placeholder="Participe da discussão."/>
      </form>
    </div>
  );
}

export default AddComment;

