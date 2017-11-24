import React from 'react';
import ScoresReaction from "../../../ScoresReaction";
import ReactionButtonsContainer from "../../../../containers/reactionButtonsContainer";
import BarStatus from "../../../BarStatus/index";

const PostReact = ({ points }) => {

  return (
    <div className="post-react row -direct-column -space-between">
      <ReactionButtonsContainer/>
      <BarStatus/>
    </div>
  );
}

export default PostReact;

