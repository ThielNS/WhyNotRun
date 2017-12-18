import React from 'react';
import * as moment from 'moment';
import PropTypes from 'prop-types';
import Avatar from '../../Avatar';
import TagTech from "../../TagTech/index";

const PostHeader = ({user, datePublication, technologies}) => {
  const datePost = moment(datePublication).fromNow();

  return (
    <div className="post-header row -space-between -align-center">
      <div className="post-user row -align-center">
        <Avatar img={user.picture}/>
        <div className="row -direct-column">
          <p className="work-user">{user.profession}</p>
          <p>
            <span className="name-user">{user.name}</span>
            <span className="date-post">{`há ${datePost}`}</span>
          </p>
        </div>
      </div>
      <TagTech tags={technologies}/>
    </div>
  );
};

PostHeader.propType = {
  user: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
      profession: PropTypes.string.isRequired
    })
  ),
  datePublication: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired
    }).isRequired
  )
};

export default PostHeader;

