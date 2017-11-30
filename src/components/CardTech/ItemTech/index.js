import React, { Component } from 'react';
import "./style.scss";

const ItemTech = ({ technology, points, posts }) => (
    <li className="list-techs">
        <h3 className="title-tech">{technology}</h3>
        <span>{points}</span>
        <span>{posts}</span>
    </li>
);
export default ItemTech;