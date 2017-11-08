import React from 'react';
import { Link } from "react-router-dom";

const ItemMenu = ({ to, title }) => (
  <li>
    <Link to={to} >{title}</Link>
  </li>
);

export default ItemMenu;