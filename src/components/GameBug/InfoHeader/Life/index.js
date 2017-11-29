import React from 'react';

const Life = () => {

  const life = [ true, true, true, true, false ];

  return (
    <ul className="life row">
      {life.map((life, index) => (
        <li key={index} className="heart">
          <i className={`fa ${life ? 'fa-heart' : 'fa-heart-o'}`}/>
        </li>
      ))}
    </ul>
  );
};

export default Life;