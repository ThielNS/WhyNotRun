import React from 'react';
import { Link } from "react-router-dom";

const Access = () => (
  <div className="row -align-center -direct-column _padding-bottom">
    <h3 className="_margin-bottom _color-white">Participe da discução, Faça Login, ou crie uma conta!</h3>
    <div>
      <Link to="/register" className="button -second">
        <i className="fa fa-address-card-o"/> Registrar-se
      </Link>
      <Link to="/login" className="button -default -no-bg">
        <i className="fa fa-address-card-o"/> Login
      </Link>
    </div>
  </div>
);

export default Access;