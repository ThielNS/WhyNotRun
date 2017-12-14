import React from 'react';
import trashBug from "../../../images/trashBugGold.png";
import trashBugSilver from "../../../images/trashBugSilver.png";
import trashBugBronze from "../../../images/trashBugBronze.png";
import trophyGold from "../../../images/trophyGold.png";
import trophySilver from "../../../images/trophySilver.png";
import trophyBronze from "../../../images/trophy.png";

import "./podiumTechs.scss";

const TechnologyPodium = ({ index, name, points, posts, position, text }) => {

    return (
        <div className="content-ranking">
            <li>
                <div className="card-tresh">
                    <div>
                        {(index === 0 ?
                            <div className="content-techBug">
                                <img src={trashBug} alt="trash-gold" className="trash bug-all" />
                            </div> :
                            index === 1 ? <div className="content-techBug"><div></div> <img src={trashBugSilver} alt="trash-golden" className="trash" /></div> :
                                index === 2 ? <div className="content-techBug"><div></div><img src={trashBugBronze} alt="trash-silver bug-little" className="trash bronze" /></div> :
                                    "")}
                    </div>
                </div>
                <div className="details-technology">
                    <div className="content-podium">
                        {index === 0 ? (<img src={trophyGold} alt="trophy-gold" className="trophy-gold" />
                        ) : index === 1 ? (<img src={trophySilver} alt="trophy-silver" className="trophy-silver" />) : index === 2 ? (<img src={trophyBronze} alt="trophy-bronze" className="trophy-bronze" />) : ''}
                        <h3 className="technology-title">{name}</h3>
                    </div>
                    <div className="card-details">
                        <div className="details-flex">
                            <i>Postagens</i>
                            <i>{posts}</i>
                        </div>
                        <div className="details-flex">
                            <i>Pontos</i>
                            <i>{points}</i>
                        </div>
                    </div>
                </div>
            </li>
        </div>
    )
}
export default TechnologyPodium;