import React from 'react';

const Score = ({ myRecord, myPoints }) => {
  const records = parseFloat(myRecord.toFixed(0));
  const points = parseFloat(myPoints.toFixed(0));

  return (
    <div className="score">
      <p>Seu Record: <span className="points">{records}</span></p>
      <p>Ponto Atual: <span className="points">{points}</span></p>
    </div>
  );
};

export default Score;