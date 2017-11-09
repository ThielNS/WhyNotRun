import React from 'react';
import Avatar from '../../../Avatar';

const PostComments = ({ comments }) => {
  return (
    <div className="post-comments">
      <ul className="row -direct-column">
        {comments.map((c, i) => (
          <li className="col-sm-12" key={i}>
            <Avatar/>
            <div className="comment">
              <span>{c.UserName}</span>
              <p>{c.Description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostComments;

