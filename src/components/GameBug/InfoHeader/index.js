import React from 'react';
import Life from "./Life";
import Score from "./Score";

const InfoHeader = ({myPoints}) => {
  return (
    <nav className="info-header row -space-between -align-center col-sm-12">
      <Life/>
      <Score myPoints={myPoints}/>
    </nav>
  );
};

export default InfoHeader;