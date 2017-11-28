import React from 'react';

import './style.scss';


const BottomTechnologies = ({ index, name, points, posts }) => {
    return (
        <div>
            <li className="list-technologies">
                <div className="position">
                    <i>{index}</i>
                </div>
                <div className="technology">
                    <i>{name}</i>
                </div>
                <i className="points">{points}</i>
                <i className="posts">{posts}</i>
            </li>
        </div>
    )
}

export default BottomTechnologies;