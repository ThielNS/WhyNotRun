import React from 'react';
import './barstatus.scss';
import gif from './spark-v3.gif';

const BarStatus = ({ agree, disagree }) => {

  const total = agree + disagree;
  const percentAgree = (agree / total) * 100;
  const percentDisagree = (disagree / total) * 100;

  return (
    <div className="bar-status">
      <div className="bar -agree" style={{width: `${percentAgree}%`}}/>
      <div className="spark-bar">
        <img src={gif} alt=""/>
      </div>
      <div className="bar -disagree" style={{width: `${percentDisagree}%`}}/>
    </div>
  );
};

export default BarStatus;