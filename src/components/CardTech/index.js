import React, { Component } from 'react';
import ItemTech from './ItemTech';

import './style.css';

class CardTech extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [
                {
                    technology: 'React.js',
                    points: '123',
                    posts: '12'
                },
                {
                    technology: 'Ember.js',
                    points: '123',
                    posts: '12'
                },
                {
                    technology: 'Vue.js',
                    points: '123',
                    posts: '12'
                }
            ]
        }
    }
    render() {
        const { items } = this.state;
        return (
            <ul className='techs'>
                {items.map((item, index) => (
                    <ItemTech key={index} technology={item.technology} points={item.points} posts={item.posts} />
                ))}
            </ul>
        );
    }

}
export default CardTech;