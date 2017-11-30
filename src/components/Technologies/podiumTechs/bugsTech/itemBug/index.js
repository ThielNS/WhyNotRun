import React from 'react';

import "./style.scss";

const ItemBug = ({ index }) => {
    return (
        <div className="content-icbug">
            <i className = {(index <= 2 ? "linear fa fa-bug ic-bug " : "fa fa-bug")} aria-hidden="true"></i>
        </div>
    )
}

export default ItemBug;
