import React from 'react';

const Bug = ({ top, left, size, index }) => {
  return (
    <span
      className={`bug ${index %2 === 0 ? 'move-left' : 'move-right'} fa fa-bug fa-flip-vertical`}
      style={{
        top: `${top}px`,
        left: `${left}px`,
        fontSize: `${size}px`
      }}
    />
  );
};

export default Bug;