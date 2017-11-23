import React, { Component } from 'react';
import Item from './Item';
import './navmenu.scss';

class NavMenu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          to: '/technologys',
          title: 'Tecnologias',
        },
        {
          to: '/login',
          title: 'Login',
        },
        {
          to: '/register',
          title: 'Registrar-se',
        },
      ],
    }
  }

  render() {

    const { items } = this.state;

    return (
      <ul>
        {items.map((item, index) => (
          <Item key={index} to={item.to} title={item.title}/>
        ))}
      </ul>
    )
  }

}

export default NavMenu;

