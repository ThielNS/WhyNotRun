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
          to: '/ranking',
          title: 'Ranking',
          icon: 'trash',
        },
        {
          to: '/logout',
          title: 'Sair',
          icon: 'sign-out',
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
    const { userToken } = this.props;

    return (
      <ul className="nav-menu">
        {items.map((item, index) => {

          if (!userToken) {

            if(item.to !== '/logout')
              return (<Item key={index} {...item}/>);

          } else {

            if (item.to !== '/login' && item.to !== '/register')
              return (<Item key={index} {...item}/>);

          }

          return null;
        })}
      </ul>
    )
  }
}

export default NavMenu;

