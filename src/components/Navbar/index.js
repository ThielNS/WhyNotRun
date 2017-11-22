import React from 'react';
import { Link } from "react-router-dom";
import Avatar from '../Avatar';
import NavMenu from '../Navmenu';
import './navbar.scss';
import Search from "../Search";


const NavBar = ({ token }) => (
  <nav className="nav-menu row -space-between">
    <div className="col-sm-12 row -space-between -flex-start -align-center">
      <Link to="/feed">
        <h1>WhyNotRun</h1>
      </Link>
      <Search/>
    </div>

    <div className="row -flex-end -align-center">
      <NavMenu/>
      {token ? (<Avatar/>) : null}
    </div>
  </nav>
);

export default NavBar;