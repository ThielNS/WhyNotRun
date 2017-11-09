import React, { Component } from 'react';
import "./style.css";

const ItemTech = ({ technology, points, posts }) => (
    <li className='list-techs'>
        <h3>{technology}</h3>
        <span>{points}</span>
        <span>{posts}</span>
    </li>
);
export default ItemTech;