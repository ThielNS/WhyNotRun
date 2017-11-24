import React from 'react';
import * as moment from 'moment';
import PropTypes from 'prop-types';
import Avatar from '../../Avatar';
import TagTech from "../../TagTech/index";

const PostHeader = ({user, date, tags}) => {

  const datePost = moment(date).fromNow();

  return (
    <div className="post-header row -space-between -align-center">
      <div className="post-user row -align-center">
        <Avatar img={user.avatar}/>
        <div className="row -direct-column">
          <p className="work-user">{user.work}</p>
          <p>
            <span className="name-user">{user.name}</span>
            <span className="date-post">{`há ${datePost}`}</span>
          </p>
        </div>
      </div>
      <TagTech tags={tags}/>
    </div>
  );
};

PostHeader.propType = {
  user: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      work: PropTypes.string.isRequired
    })
  )
};

export default PostHeader;

