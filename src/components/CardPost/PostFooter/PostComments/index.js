import React from 'react';
import Avatar from '../../../Avatar';

const PostComments = ({ comments }) => {
  return (
    <div className="post-comments">
      <ul className="row -direct-column">
        {comments.map((comment, index) => (
          <li className="col-sm-12" key={index}>
            <Avatar/>
            <div className="comment">
              <span>{comment.UserName}</span>
              <p>{comment.Description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostComments;

