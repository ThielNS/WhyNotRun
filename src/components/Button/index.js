import React from 'react';
import './button.scss';

const Button = ({title, icon, classStyle, ...actions}) => {
  return (
    <button className={classStyle ? `button ${classStyle}` : 'button'} {...actions}>
      {icon ? (<i className={`fa fa-${icon}`}></i>) : null}
      {title}
    </button>
  );
}

export default Button;