import React from 'react';
import * as moment from 'moment';
import Avatar from '../../Avatar';

const PostHeader = ({user, date}) => {
  console.log(date);
  const datePost = moment(date).fromNow();

  return (
    <div className="post-header row -space-between -align-center">
      <div className="post-user row -align-center">
        <Avatar/>
        <span className="name-user">{user.name}</span>
        <span className="work-user">{user.work}</span>
      </div>
      <div className="post-data">
        <p>{datePost}</p>
      </div>
    </div>
  );
}

export default PostHeader;

