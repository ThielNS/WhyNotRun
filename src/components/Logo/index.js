import React from 'react';
import { Link } from "react-router-dom";

const Logo = () => (
    <Link to="/">
      <h1><img src="logo.png" alt="Logo do WhyNotRun"/></h1>
    </Link>
);

export default Logo;