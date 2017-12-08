import React, { Component } from 'react';
import ItemFooter from "./ItemFooter"

class Footer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [
                {
                    icon:'face'
                },
                {
                    icon:'instagram'
                },
                {
                    icon:'gitHub'
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
                    <ItemFooter item={item} key={index}/>
                ))}
            </ul>
        )
    }
}
export default Footer;