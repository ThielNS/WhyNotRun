import React from 'react';

import './style.scss';


const BottomTechnologies = ({ index, name, points, posts }) => {
    return (
        <div>
            {(index > 2 ?
                <li className="list-technologies">
                    <div className="position">
                        <i>
                            {index + 1}
                        </i>
                    </div>
                    <div className="technology">
                        <i>{name}</i>
                    </div>
                    <div className="posts">
                        <i className="posts">{posts}</i>
                    </div>
                    <div className="points">
                        <i className="points">{points}</i>
                    </div>
                </li>
                : '')}
        </div>
    )
}

export default BottomTechnologies;