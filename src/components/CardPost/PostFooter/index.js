import React from 'react';
import PostReact from "./PostReact";
import PostComments from "./PostComments";
import AddComment from "./AddComment";

const PostFooter = ({ reactions, comments }) => {
  return (
    <footer className="post-footer">
      <PostReact reactions={reactions}/>
      <PostComments comments={comments}/>
      <AddComment/>
    </footer>
  );
};

export default PostFooter;

