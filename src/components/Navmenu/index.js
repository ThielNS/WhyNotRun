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
      ],
    }
  }

  render() {

    const { items } = this.state;
    const { token } = this.props;

    return (
      <ul>
        {items.map((item, index) => {
          if (token) {
            if (item.to !== '/login' && item.to !== '/register') {
              return (<Item key={index} {...item}/>);
            }
          } else {
            return (<Item key={index} {...item}/>);
          }
        })}
      </ul>
    )
  }

}

export default NavMenu;

