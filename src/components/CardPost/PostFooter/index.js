import React from 'react';
import Button from '../../Button';
import PostReact from "./PostReact";
import PostComments from "./PostComments";
import AddComment from "./AddComment";

const PostFooter = ({ points }) => {
  return (
    <footer className="post-footer">
      <PostReact points={points}/>
      <PostComments/>
      <AddComment/>
    </footer>
  );
}

export default PostFooter;

