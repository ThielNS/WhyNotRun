import React from 'react';
import './style.scss';

const TabRanking = ({index, title}) => {
    return (
       <li className={(index == 0 ? 'unclick' : 'tab-menu clicked')}>
           {title}
       </li>
    )
}

export default TabRanking;