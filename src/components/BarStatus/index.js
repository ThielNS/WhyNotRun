import React from 'react';
import './barstatus.scss';
import gif from './spark-v3.gif';

const BarStatus = () => {
  return (
    <div className="bar-status">
      <div className="bar -agree col-sm-4"/>
      <div className="spark-bar">
        <img src={gif} alt=""/>
      </div>
      <div className="bar -disagree col-sm-8"/>
    </div>
  );
};

export default BarStatus;