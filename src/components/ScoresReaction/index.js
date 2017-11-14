import React from 'react';

const styleScore = (points) => {
  if(points < 0) {
    return 'point -negative';
  } else if(points === 0) {
    return 'point';
  } else {
    return 'point -positive';
  }

};

const ScoresReaction = ({ score }) => {

  const convertScore = score.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");

  return (
    <span className={styleScore(score)}>
    {convertScore} Pontos</span>
  );
};

export default ScoresReaction;