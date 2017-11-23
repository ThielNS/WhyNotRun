import React from 'react';

import './style.scss';

const BottomTechnologies = ({ position, title, points, posts }) => {
    return (
        <li className="list-technologies">
            <i>{position}</i>
            <i>{title}</i>
            <i>{points}</i>
            <i>{posts}</i>
        </li>
    )
}

export default BottomTechnologies;