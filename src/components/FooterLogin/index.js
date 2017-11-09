import React from 'react';
import { Link } from "react-router-dom";

const FooterLogin = ({ pathname }) => {
  return (
    <footer className="access-footer">
      <p>
        {pathname === "/login" ? (<Link to="/register">Criar Conta</Link>) : (<Link to="/login">Fazer Login</Link>)}
      </p>
    </footer>
  );
}

export default FooterLogin;