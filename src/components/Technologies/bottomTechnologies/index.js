import React from 'react';

import './style.scss';


const BottomTechnologies = ({ position, title, points, posts }) => {
    return (
        <div>
            <li className="list-technologies">
                <div className="position">
                    <i>{position}</i>
                </div>
                <div className="technology">
                    <i>{title}</i>
                </div>
                <i className="points">{points}</i>
                <i className="posts">{posts}</i>
            </li>
        </div>
    )
}

export default BottomTechnologies;