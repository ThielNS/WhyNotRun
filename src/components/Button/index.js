import React from 'react';
import './button.css';

const Button = ({title, icon, style, ...actions}) => {
  return (
    <button className={style ? `button ${style}` : 'button'} {...actions}>
      {icon ? (<i className={`fa fa-${icon}`}></i>) : null}
      {title}
    </button>
  );
}

export default Button;