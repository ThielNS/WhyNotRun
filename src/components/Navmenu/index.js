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
          to: '/logout'
        }
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
            return (<Item key={index} {...item}/>);
          } else {
            if (item.to !== '/login' && item.to !== '/register') {
              return (<Item key={index} {...item}/>);
            }
          }
        })}
      </ul>
    )
  }

}

export default NavMenu;

