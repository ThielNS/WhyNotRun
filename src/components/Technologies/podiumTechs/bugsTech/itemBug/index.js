import React from 'react';

import "./style.scss";

const ItemBug = ({ index }) => {
    console.log(index)
    return (
        <div className="content-icbug">
            <i className = {(index == 2 ? "fa fa-bug ic-bug " : 'fa fa-bug')} aria-hidden="true"></i>
        </div>
    )
}

export default ItemBug;
