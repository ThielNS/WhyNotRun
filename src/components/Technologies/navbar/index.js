import React, { Component } from 'react';
import TabRanking from '../tabRanking';

import './navbar.scss'

class Navbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tabs: [
                {
                    title: '#'
                },
                {
                    title: 'Tecnologia'
                },
                {
                    title: 'Postagens'
                },
                {
                    title: 'Pontos'
                }
            ]
        }
    }
    render() {
        const { tabs } = this.state;
        return (
            <ul className="navbar-technologies">
                {tabs.map((tab, index) => (
                    <TabRanking index={index} {...tab} />
                ))}
            </ul>
        )
    }
}
export default Navbar;