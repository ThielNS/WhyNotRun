import React from 'react';
import * as moment from 'moment';
import Avatar from '../../../Avatar';


const PostComments = ({ comments }) => {


  return (
    <div className="post-comments">
      <ul className="row -direct-column">
        {comments.map((comment, index) => {
          const dateComment = moment(comment.dateComment).fromNow();
          return (
            <li className="col-sm-12" key={index}>
              <Avatar/>
              <div className="data-comment">
                <p>
                  <span className="name-user">{comment.user.name}</span>
                  <span className="date-comment">{`há ${dateComment}`}</span>
                </p>
                <p className="comment">{comment.text}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PostComments;

