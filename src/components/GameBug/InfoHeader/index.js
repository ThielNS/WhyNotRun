import React from 'react';
import Life from "./Life";
import Score from "./Score";

const InfoHeader = ({ life, myRecord, myPoints }) => {

  return (
    <nav className="info-header row -space-between -align-center col-sm-12">
      <Life life={life}/>
      <Score myRecord={myRecord} myPoints={myPoints}/>
    </nav>
  );
};

export default InfoHeader;