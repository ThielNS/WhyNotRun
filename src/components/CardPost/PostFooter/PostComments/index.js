import React from 'react';
import Avatar from '../../../Avatar';

const PostComments = ({ comments }) => {
  return (
    <div className="post-comments">
      <ul className="row -direct-column">
        {comments.map((comment, index) => (
          <li className="col-sm-12" key={index}>
            <Avatar/>
            <div className="data-comment">
              <p>
                <span className="name-user">{comment.UserName}</span>
                <span className="date-comment">{'há 32 minutos atrás'}</span>
              </p>
              <p className="comment">{comment.Description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostComments;

