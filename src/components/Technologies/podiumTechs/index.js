import React from 'react';
import trashGold from "../images/trash-gold.png";
import trashSilver from "../images/trash-silver.png";
import trashBronze from "../images/trash-bronze.png";
import BugsTech from "./bugsTech";

import "./style.scss";

const TechnologyPodium = ({ index, name, points, posts, position, text }) => {
    const  itemsTechs  = this.props;
    console.log(index)

    return (
        <div className="content-ranking">
            <li>
                <div className="card-tresh">
                    <div>
                        {/* {(position == 1 ? <div className="content-bug"><i class="fa fa-bug" aria-hidden="true"></i></div> : '')}
 */}
                        {(index == 0  ?
                            <div className="content-techBug">
                            <div><BugsTech/></div>
                                <img src={trashGold} alt="trash-gold" className="trash bug-all" />
                                </div> :
                            index == 1 ? <div className="content-techBug"><div><BugsTech/></div> <img src={trashSilver} alt="trash-silver" className="trash"/></div> :
                                index == 2 ? <div className="content-techBug"><div><BugsTech/></div><img src={trashBronze} alt="trash-bronze bug-little" className="trash"/></div> :
                                    "")}
                    </div>
                </div>
                <div className="details-technology">
                    <h3 className="technology-title">{name}</h3>
                    <div className="card-details">
                        <div className="details-flex">
                            <i>{posts}</i>
                            <i>Postagens</i>
                        </div>
                        <div className="details-flex">
                            <i>{points}</i>
                            <i>Pontos</i>
                        </div>
                    </div>
                </div>
            </li>
        </div>
    )
}
export default TechnologyPodium;