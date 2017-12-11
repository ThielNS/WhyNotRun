import React from "react";

const ItemFooter = ({item, icon}) => {
    return (
        <li><i className={`fa fa-${icon}`}/></li>
    )
}

export default ItemFooter;