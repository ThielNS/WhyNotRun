import React, { Component } from 'react';
import InfoHeader from "./InfoHeader";
import './gamebug.scss';
import Bug from "./Bug";
import SpaceShip, { positionSpaceShip } from "./SpaceShip";

class GameBug extends Component {

  constructor(props) {
    super(props);
    this.state = {
      life: 4,
      myRecord: 234,
      myPoints: 0,
      bugs: 20,
      positionBugs: [],
      killedBugs: 0,
    }
  }

  createBugs = () => {

    const screenSize = window.innerWidth - 30;

    let { positionBugs } = this.state;

    for(let i = 0; i < this.state.bugs; i++) {

      let topRand = Math.random() * (600 - 10) + 10;
      let leftRand = Math.random() * (screenSize - 5) + 5;
      let sizeRand = Math.random() * (25 - 10) + 10;

      topRand = parseFloat(topRand.toFixed(0));
      leftRand = parseFloat(leftRand.toFixed(0));
      sizeRand = parseFloat(sizeRand.toFixed(0));

      positionBugs.push({
        top: topRand,
        left: leftRand,
        size: sizeRand
      });
    }
  };

  componentDidMount() {
    this.createBugs();
  }

  changeMyPoints = (points) => {
    const { myPoints } = this.state;
    this.setState({ myPoints: myPoints + points });
  };

  changeKilledBugs = (kills) => {
    const { killedBugs } = this.state;
    this.setState({ killedBugs: killedBugs + kills });
  };

  actionShoot = e => {
    e.preventDefault();
    const { positionBugs, killedBugs } = this.state;
    positionSpaceShip(positionBugs, killedBugs);
    setTimeout(this.changeMyPoints(positionBugs[killedBugs].size), 2000);
    this.changeKilledBugs(killedBugs + 1);
  };

  renderBug = () => {

    const { positionBugs } = this.state;

    return positionBugs.map((bug, index) => (
      <Bug {...bug} index={index} key={index}/>
    ))
  };

  render() {

    const { life, myRecord, myPoints } = this.state;

    return (
      <div className="game-bug">
        <InfoHeader
          life={life}
          myRecord={myRecord}
          myPoints={myPoints}
        />
        {/*<button onClick={this.actionShoot}>Atirar</button>*/}
        {this.renderBug()}
        <SpaceShip/>
      </div>
    );
  }
}

export default GameBug;