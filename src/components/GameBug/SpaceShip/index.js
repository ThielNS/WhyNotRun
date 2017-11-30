import React from 'react';

export const positionSpaceShip = (position, index) => {
  let spaceShip = document.getElementById('space-ship');
  let shootElement = spaceShip.lastElementChild;
  spaceShip.style.left = position[index].left;
  shootElement.style.left = position[index].left + 11;
  setTimeout(shoot(shootElement, position, index), 1000);
};

const shoot = (shoot, position, index) => {
  shoot.style.left = position[index].left;
  shoot.style.top = position[index].top;
  shoot.classList.add('-animete');
  setTimeout(shoot.classList.remove('-animate', 1000))
};

const SpaceShip = () => {
  return (
    <span
      id="space-ship"
      className="space-ship"
    >
      <i className="fa fa-space-shuttle fa-rotate-270"/>
      <span className="shoot"></span>
    </span>
  )
};

export default SpaceShip;