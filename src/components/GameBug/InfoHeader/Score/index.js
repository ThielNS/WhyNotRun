import React from 'react';

const Score = ({ myPoints }) => {
  return (
    <div className="score">
      <p>Seu Record: <span className="points">234</span></p>
      <p>Ponto Atual: <span className="points">{myPoints}</span></p>
    </div>
  );
};

export default Score;