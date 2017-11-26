import React from 'react';
import Avatar from '../Avatar';
import NavMenu from '../Navmenu';
import './navbar.scss';
import SearchForm from "../SearchForm";
import Logo from "../Logo/index";


const NavBar = ({ token }) => (
  <nav className="nav-menu row -space-between -align-center">
    <div className="row -flex-start">
      <Logo/>
    </div>

    <div className="col-sm-12 row -space-between -flex-end -align-center">
      <SearchForm/>
      <NavMenu/>
      {token ? (<Avatar/>) : null}
    </div>
  </nav>
);

export default NavBar;