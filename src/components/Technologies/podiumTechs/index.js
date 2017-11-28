import React from 'react';
import trashGold from "../images/trash-gold.png";
import trashSilver from "../images/trash-silver.png";
import trashBronze from "../images/trash-bronze.png";

import "./style.scss";

const TechnologyPodium = ({ index, name, points, posts, position }) => {
    const itemsTechs = this.props;

    return (
        <div className="content-ranking">
            <li>
                <div className="card-tresh">
                    <div>
                        {/* {(position == 1 ? <div className="content-bug"><i class="fa fa-bug" aria-hidden="true"></i></div> : '')}
 */}
                        {(index == 0 ?
                            <img src={trashGold} alt="trash-gold" className="trash" /> :
                            index == 1 ? <img src={trashSilver} alt="trash-silver" /> :
                                index == 2 ? <img src={trashBronze} alt="trash-bronze" /> :
                                    "")}
                    </div>
                </div>
                <div className="details-technology">
                    <h3 className="technology-title">{name}</h3>
                    <div className="card-details">
                        <div className="details-flex">
                            <i>{points}</i>
                            <i>Postagens</i>
                        </div>
                        <div className="details-flex">
                            <i>{posts}</i>
                            <i>Pontos</i>
                        </div>
                    </div>
                </div>
            </li>
        </div>
    )
}
export default TechnologyPodium;