import React, { Component } from 'react';
import InfoHeader from "./InfoHeader";
import './gamebug.scss';
import Bug from "./Bug";
import SpaceShip from "./SpaceShip";

class GameBug extends Component {

  constructor(props) {
    super(props);
    this.state = {
      life: 4,
      myRecord: 234,
      myPoints: 0,
      bugs: 100,
      positionBugs: [],
    }
  }

  createBugs = () => {

    const screenSize = window.innerWidth - 10;

    let { positionBugs } = this.state;

    for(let i = 0; i < this.state.bugs; i++) {

      const topRand = Math.random() * (600 - 10) + 10;
      const leftRand = Math.random() * (screenSize - 5) + 5;
      const sizeRand = Math.random() * (25 - 10) + 10;

      positionBugs.push({
        top: `${topRand}px`,
        left: `${leftRand}px`,
        size: `${sizeRand}px`
      });
    }
  };

  componentDidMount() {
    this.createBugs();
  }

  shoot = (element, position) => {
    console.log(element)
  };

  actionShoot = e => {
    e.preventDefault();
    const { myPoints, positionBugs } = this.state;
    let spaceShip = document.getElementById('spaceShip');
    spaceShip.style.left = positionBugs[myPoints].left;
    setTimeout(this.shoot(spaceShip), 1000)
    this.setState({ myPoints: myPoints + 1 });
  };


  render() {

    const { myPoints, positionBugs } = this.state;

    return (
      <div className="game-bug">
        <InfoHeader myPoints={myPoints}/>
        <button onClick={this.actionShoot}>Atirar</button>
        {positionBugs.map((bug, index) => (
          <Bug {...bug} index={index} key={index}/>
        ))}
        <SpaceShip/>
      </div>
    );
  }
}

export default GameBug;