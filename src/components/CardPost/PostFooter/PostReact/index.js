import React from 'react';
import ScoresReaction from "../../../ScoresReaction";
import ReactionButtonsContainer from "../../../../containers/reactionButtonsContainer";
import BarStatus from "../../../BarStatus/index";

const PostReact = ({ reactions }) => {

  return (
    <div className="post-react row -direct-column -space-between">
      <ReactionButtonsContainer {...reactions}/>
      <BarStatus agree={reactions.agree} disagree={reactions.disagree}/>
    </div>
  );
}

export default PostReact;

