import React, { Component } from 'react';
import ItemTech from './ItemTech';

import './style.scss';

class CardTech extends Component {
    constructor(props) {
        super(props);   
        
        this.state = {
            items:[]
        }
    }
    componentDidMount() {
        this.props.getApi();
    }

    render() {
        const { items } = this.props;

        return (
            <ul className='techs'>
                {items.map((item, index) => (
                    <ItemTech key={index} {...item} title={item.title}  />
                ))}
            </ul>
        );
    }

}
export default CardTech;