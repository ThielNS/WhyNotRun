import React from 'react';
import spaceShip from './spaceship.png';

export const positionSpaceShip = (position, index) => {

  let spaceShip = document.getElementById('space-ship');
  let shootElement = spaceShip.lastElementChild;

  spaceShip.style.left = `${position[index].left}px`;
  shootElement.style.left = `${position[index].left + 9}px`;

  setTimeout(() => {
    shootElement.classList.add('-animete');
    shootElement.style.top = `${position[index].top}px`;

    setTimeout(() => {
      shootElement.classList.remove('-animete');
      shootElement.style.top = '99%';
      shootElement.style.opacity = '0';
    }, 1000);
  }, 1000);
};

const SpaceShip = () => {
  return (
    <span
      id="space-ship"
      className="space-ship"
    >
      <img src={spaceShip} alt="Nave Bits"/>
      <span className="shoot"></span>
    </span>
  )
};

export default SpaceShip;