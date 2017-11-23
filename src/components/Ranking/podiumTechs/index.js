import React from 'react';
import './style.scss';

const TechnologyPodium = ({ title, points, posts, position }) => {
    return (
        <div>
            <li>
                <h3>{title}</h3>
                <i>{position}</i>
                <i>Position</i>
                <i>{points}</i>
                <i>Pontuação</i>
                <i>{posts}</i>
                <i>Publicações</i>
            </li>
        </div>
    )
}
export default TechnologyPodium;