import React from 'react';
import Avatar from '../Avatar';
import NavMenu from '../Navmenu';
import './navbar.scss';
import SearchForm from "../SearchForm";
import Logo from "../Logo/index";


const NavBar = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const token = localStorage.getItem('userToken');
  const renderAvatar = token ? (<Avatar img={user.picture}/>) : null;

  return (
    <nav className="nav-bar row -space-between -align-center">
      <div className="row -flex-start">
        <Logo/>
      </div>

      <div className="col-sm-12 row -space-between -flex-end -align-center">
        <SearchForm/>
        <NavMenu token={token}/>
        {renderAvatar}
      </div>
    </nav>
  );
};

export default NavBar;