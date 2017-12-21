import React from "react";

export const Item = ({index, name, posts, points}) => {
    return (
        <div>
            <li className="list-technologies">
                <div className="position">
                    <i>
                        {index + 1 + 'º'}
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
          
    </div>
    )
}

