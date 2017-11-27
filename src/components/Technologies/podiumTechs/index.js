import React from 'react';
import trashGold from "../images/trash-gold.png";
import trashSilver from "../images/trash-silver.png";
import trashBronze from "../images/trash-bronze.png";

import "./style.scss";

const TechnologyPodium = ({ title, points, posts, position }) => {

    return (
        <div className="content-ranking">
            <li>
                <div className="card-tresh">
                    <div>
{/*                         {(position == 1 ? <div className="content-bug"><i class="fa fa-bug" aria-hidden="true"></i></div> : '')}
 */}
                        {(position == 1 ? <img src={trashGold} alt="trash-gold" className="trash" /> : position == 2 ? <img src={trashSilver} alt="trash-silver" /> : position == 3 ? <img src={trashBronze} alt="trash-bronze" /> : "")}


                    </div>
                </div>
                <div className="details-technology">
                    <h3 className="technology-title">{title}</h3>
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