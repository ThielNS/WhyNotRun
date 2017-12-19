import React from 'react';
import Avatar from '../Avatar';
import NavMenu from '../Navmenu';
import './navbar.scss';
import SearchPublicationContainder from '../../containers/SearchPublicationContainer';
import Logo from "../Logo/index";


const NavBar = (props) => {
  const { userToken, user } = props.access;
  const renderAvatar = userToken ? (<Avatar img={user.picture}/>) : null;

  return (
    <nav className="nav-bar row -space-between -align-center">
      <div className="row -flex-start">
        <Logo/>
      </div>

      <div className="col-sm-12 row -space-between -flex-end -align-center">
        <SearchPublicationContainder/>
        <NavMenu userToken={userToken}/>
        {renderAvatar}
      </div>
    </nav>
  );
};

export default NavBar;