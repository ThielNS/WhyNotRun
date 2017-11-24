import React from 'react';
import Button from '../../../Button';

const AddComment = () => {

  return (
    <div className="add-comment">
      <form>
        <input type="text" placeholder="Comentar..."/>
        <Button icon="send" style="-third -circle"/>
      </form>
    </div>
  );
}

export default AddComment;

