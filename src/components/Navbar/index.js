import React from 'react';
import { Link } from "react-router-dom";
import Avatar from '../Avatar';

const NavMenu = () => (
  <nav className="nav-menu row -space-between">
    <div className="row -flex-start -align-center">
      <Link to="/feed">
        <h1>WhyNotRun</h1>
      </Link>
      <form action="" method="get" className="form-search">
        <i className="fa fa-search"></i>
        <input type="text" name="search" placeholder="Procurar..."/>
      </form>
    </div>

    <div className="row -flex-end -align-center">
      <Avatar/>
    </div>
  </nav>
);

export default NavMenu;