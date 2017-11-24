import React, { Component } from 'react';
import Item from './Item';
import './navmenu.scss';

class NavMenu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          to: '/',
          title: 'Feed',
          icon: 'newspaper-o',
        },
        {
          to: '/technologys',
          title: 'Ranking',
          icon: 'trash',
        },
        {
          to: '/login',
          title: 'Login',
          icon: 'lock',
        },
        {
          to: '/register',
          title: 'Registrar-se',
          icon: 'address-card-o',
          button: true,
        },
        {
          to: '/profile',
          title: 'Gabriel Souza',
          icon: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb',
          avatar: true,
        },
      ],
    }
  }

  render() {

    const { items } = this.state;
    const token = true;

    return (
      <ul>
        {items.map((item, index) => {
          if (token) {
            if (item.to !== '/login' && item.to !== '/register') {
              return (<Item key={index} {...item}/>);
            }
          } else {
            if (item.to !== '/profile') {
              return (<Item key={index} {...item}/>);
            }
          }
        })}
      </ul>
    )
  }

}

export default NavMenu;

