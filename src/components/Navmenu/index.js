import React, { Component } from 'react';
import Item from './Item';
import './navmenu.css';

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
    const token = false;

    return (
      <ul>
        {items.map((item, index) => {
          if (token) {
            if (item.to == '/technologys') {
              return (<Item key={index} to={item.to} title={item.title}/>);
            }
          } else {
            return (<Item key={index} to={item.to} title={item.title}/>);
          }
        })}
      </ul>
    )
  }

}

export default NavMenu;

