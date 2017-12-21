import React from 'react';
import { Link } from "react-router-dom";
import '../../Button/button.scss';
import Avatar from "../../Avatar/index";

const ItemMenu = ({ to, title, icon, button, avatar }) => {

  const avatarProfile = <Avatar alt={title} img={icon}/>;
  const LinkMenu = (
    <Link
      to={to}
      className={`${button ? `button -second` : ``}`}
    >
      <i className={`fa fa-${icon}`} />
      {title}
    </Link>
  );

  const render = avatar ? avatarProfile : LinkMenu;

  return (
    <li>
      {render}
    </li>
  );
};

export default ItemMenu;