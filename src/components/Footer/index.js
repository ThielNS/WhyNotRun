import React, { Component } from 'react';
import ItemFooter from "./ItemFooter"

class Footer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [
                {
                    icon:'facebook'
                },
                {
                    icon:'instagram'
                },
                {
                    icon:'github-alt'
                },
                {
                    icon:'twitter'
                }
            ]
        }
    }

    render() {

        const { items } = this.state;

        return (
            <ul>
                {items.map((item, index) => (
                    <ItemFooter key={index} {...item}/>
                ))}
            </ul>
        )
    }
}
export default Footer;