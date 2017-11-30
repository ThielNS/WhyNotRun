import React from 'react';
import './style.scss';

const TabRanking = ({index, title}) => {
    return (
       <li className='tab-menu clicked'>
           {title}
       </li>
    )
}

export default TabRanking;