import React from 'react';

const BottomTechnologies = ({ position, title, points, posts }) => {
    return (
        <li>
            <h3>{title}</h3>
            <i>{position}</i>
            <i>Position</i>
            <i>{points}</i>
            <i>Pontuação</i>
            <i>{posts}</i>
            <i>Publicações</i>
        </li>
    )
}

export default BottomTechnologies;