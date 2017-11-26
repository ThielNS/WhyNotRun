import React from 'react';
import PropTypes from 'prop-types';

const PostContent = ({title, text}) => {
  return (
    <div className="post-content">
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

PostContent.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default PostContent;

