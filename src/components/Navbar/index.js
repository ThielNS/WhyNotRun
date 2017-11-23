import React from 'react';
import Avatar from '../Avatar';
import NavMenu from '../Navmenu';
import './navbar.scss';
import Search from "../Search";
import Logo from "../Logo/index";


const NavBar = ({ token }) => (
  <nav className="nav-menu row -space-between">
    <div className="col-sm-12 row -space-between -flex-start -align-center">
      <Logo/>
      <Search/>
    </div>

    <div className="row -flex-end -align-center">
      <NavMenu/>
      {token ? (<Avatar/>) : null}
    </div>
  </nav>
);

export default NavBar;