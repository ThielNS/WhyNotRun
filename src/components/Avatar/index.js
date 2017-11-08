import React from 'react';
import { Link } from "react-router-dom";
import './avatar.css';

const Avatar = () => (
  <div className="avatar">
    <Link to="/profile">
      <img src="https://cid-ead510cca24101ce.users.storage.live.com/users/0xead510cca24101ce/myprofile/expressionprofile/profilephoto:UserTileStatic,UserTileSmall/MeControlMediumUserTile?ck=1&ex=24&fofoff=1" alt="Img user"/>
    </Link>
  </div>
);

export default Avatar;