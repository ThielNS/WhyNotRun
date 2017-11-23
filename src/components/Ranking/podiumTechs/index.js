import React from 'react';
import './style.scss';

const TechnologyPodium = ({ title, points, posts, position }) => {
    return (
        <div className="content-ranking">
            <li>
                <div className="card-tresh">
                    <div >
                        <i className="fa fa-trash" aria-hidden="true" ></i>
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