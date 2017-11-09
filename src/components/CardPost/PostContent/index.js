import React from 'react';

const PostContent = ({title, text}) => {
  return (
    <div className="post-content">
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

export default PostContent;

