import React from 'react';
import Avatar from '../../../Avatar';

const PostComments = ({ comments }) => {
  return (
    <div className="post-comments">
      <ul className="row -direct-column">
        <li className="col-sm-12">
          <Avatar/>
          <div className="comment">
            <span>{'Gabriel Souza'}</span>
            <p>Lorem Ispsum dolos sit amet</p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default PostComments;

