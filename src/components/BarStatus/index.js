import React from 'react';
import './barstatus.scss';
import gif from './spark-v3.gif';

const BarStatus = ({ agree, disagree }) => {

  const total = agree + disagree;
  let percentAgree = (agree / total) * 100;
  let percentDisagree = (disagree / total) * 100;

  if (!percentAgree)
    percentAgree = 0;
  if (!percentDisagree)
    percentDisagree = 0;

  return (
    <div className="bar-status row -space-between">
      <div className="bar -agree" style={{width: `${percentAgree}%`}}/>
      <div className="spark-bar">
        <img src={gif} alt=""/>
      </div>
      <div className="bar -disagree" style={{width: `${percentDisagree}%`}}/>
    </div>
  );
};

export default BarStatus;