import React from 'react';
import ScoresReaction from "../../../ScoresReaction";
import ReactionButtonsContainer from "../../../../containers/reactionButtonsContainer";
import BarStatus from "../../../BarStatus/index";

const PostReact = ({ reactions, changeAddComment }) => {

  return (
    <div className="post-react row -direct-column -space-between">
      <ReactionButtonsContainer {...reactions} changeAddComment={changeAddComment}/>
      <BarStatus agree={reactions.agree} disagree={reactions.disagree}/>
    </div>
  );
}

export default PostReact;

