import React, { Component } from 'react';
import ItemTech from './ItemTech';

import './style.css';

class CardTech extends Component {
    constructor(props) {
        super(props);   
        
        this.state = {
            items:[]
        }
    }
    componentDidMount() {
        console.log(this.props);
        this.props.getApi();
    }

    render() {
        console.log(this.props)
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