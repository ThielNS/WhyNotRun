import React from 'react';
import ScoresReaction from "../../../ScoresReaction";
import ReactionButtonsContainer from "../../../../containers/reactionButtonsContainer";

const PostReact = ({ points }) => {

  return (
    <div className="row -space-between post-react">
      <ReactionButtonsContainer/>
      <ScoresReaction score={points}/>
    </div>
  );
}

export default PostReact;

