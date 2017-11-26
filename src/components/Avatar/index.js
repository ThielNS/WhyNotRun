import React from 'react';
import { Link } from "react-router-dom";
import './avatar.css';

const Avatar = ({img, alt}) => (
  <div className="avatar">
    <Link to="/profile">
      <img src={img} alt={alt}/>
    </Link>
  </div>
);

export default Avatar;