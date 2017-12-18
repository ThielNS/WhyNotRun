import React from 'react';
import ReactionButtonsContainer from "../../../../containers/ReactionButtonsContainer";
import BarStatus from "../../../BarStatus/index";

const PostReact = ({ reactions, changeAddComment, postId, postIndex }) => {

  return (
    <div className="post-react row -direct-column -space-between">
      <ReactionButtonsContainer {...reactions} postId={postId} postIndex={postIndex} changeAddComment={changeAddComment}/>
      <BarStatus agree={reactions.agree} disagree={reactions.disagree}/>
    </div>
  );
};

export default PostReact;

