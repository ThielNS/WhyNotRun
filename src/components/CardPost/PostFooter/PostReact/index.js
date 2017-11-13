import React from 'react';
import Button from '../../../Button';

const PostReact = ({ points }) => {

  return (
    <div className="row -space-between post-react">
      <div className="react-buttons">
        <Button icon="thumbs-o-up" style="-third -no-bg" />
        <Button icon="thumbs-o-down" style="-danger -no-bg" />
      </div>
      <span className={points < 0 ? 'point -negative' : points === 0 ? 'point' : 'point -positive'}>{points.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")} Pontos</span>
    </div>
  );
}

export default PostReact;

