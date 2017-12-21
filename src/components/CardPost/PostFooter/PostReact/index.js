import React from 'react';
import ReactionButtonsContainer from "../../../../containers/ReactionButtonsContainer";
import BarStatus from "../../../BarStatus/index";

const PostReact = ({ reactions, visibleAddComment, postId, postIndex }) => {

  return (
    <div className="post-react row -direct-column -space-between">
      <ReactionButtonsContainer {...reactions} postId={postId} postIndex={postIndex} visibleAddComment={visibleAddComment}/>
      <BarStatus agree={reactions.agreeQuantity} disagree={reactions.disagreeQuantity}/>
    </div>
  );
};

export default PostReact;

