import React, {Component} from 'react';
import Item from './Item'
import './style.css'

class TabFilter extends Component {
   
  constructor(props) {
    super(props);

  }

  render() {

    return (
      <ul className='menu-techs'>
          <Item />
      </ul>
    )
  }

}

export default TabFilter;

