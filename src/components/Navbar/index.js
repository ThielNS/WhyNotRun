import React from 'react';
import { Link } from "react-router-dom";
import Avatar from '../Avatar';
import NavMenu from '../Navmenu';
import './navbar.css';
import Search from "../Search";


const NavBar = () => (
  <nav className="nav-menu row -space-between">
    <div className="row -flex-start -align-center">
      <Link to="/feed">
        <h1>WhyNotRun</h1>
      </Link>
      <Search/>
    </div>

    <div className="row -flex-end -align-center">
      <NavMenu/>
      <Avatar/>
    </div>
  </nav>
);

export default NavBar;